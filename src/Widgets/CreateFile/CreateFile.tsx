import { useModal } from "../../Features/hooks/useModal";
import { useParams } from "react-router-dom";
import { useCreateFile } from "../../Features/hooks/useCreateFile";
import { useToggleFile } from "../../Features/hooks/useToggleFile";
import CloseFileBtn from "../../Shared/UI/CloseFileBtn/CloseFileBtn";
import CreateFileInner from "./CreateFileInner";
import "./CreateFile.css";
import CreateAddFile from "./CreateAddFile";
import CreateTagAndShare from "./CreateTagAndShare";
import CreateSaveFileBtn from "./CreateSaveFileBtn";
import ApproveDeleteFile from "../ApproveDeleteFile/ApproveDeleteFile";
import { toast } from "react-toastify";

interface ICreateFileProps {
  closeModal?: () => void;
}

function CreateFile({ closeModal }: ICreateFileProps) {
  const { isOpenModal, openModal, closeApproveModal  } = useModal();
  const {handleCreate} = useCreateFile();
  const {toggleFile} = useToggleFile();

  const { documentId } = useParams<{ documentId: string }>();
  const isFileCreated = !documentId;

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();

    if (isFileCreated) {
      handleCreate(e as React.FormEvent<HTMLFormElement>);
      toast.success("Заметка успешно создана!");
    } else {
      toggleFile(documentId, !isFileCreated);
      toast.success("Заметка успешно обновлена!");
    }

    if (closeModal) {
      closeModal();
    }
  }

  return (
    <div className="create__file">
      <div className="modal__overlay">
        <form className="file__modal-inner" onSubmit={handleSubmit}>
          <CloseFileBtn closeModal={closeModal} />
          <CreateFileInner />
          <CreateAddFile />
          <CreateTagAndShare openModal={openModal} isFileCreated={isFileCreated}/>
          <CreateSaveFileBtn />
          {isOpenModal === "approveDeleteFile" && (
            <ApproveDeleteFile closeModal={closeApproveModal} />
          )}
        </form>
      </div>
    </div>
  );
}

export default CreateFile;
