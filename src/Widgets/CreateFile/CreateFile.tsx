import { useModal } from "../../Features/hooks/useModal";
import { useCreateFile } from "../../Features/hooks/useCreateFile";
import CloseFileBtn from "../../Shared/UI/CloseFileBtn/CloseFileBtn";
import CreateFileInner from "./CreateFileInner";
import "./CreateFile.css";
import CreateAddFile from "./CreateAddFile";
import CreateTagAndShare from "./CreateTagAndShare";
import CreateSaveFileBtn from "./CreateSaveFileBtn";
import ApproveDeleteFile from "../ApproveDeleteFile/ApproveDeleteFile";

interface ICreateFileProps {
  closeModal?: () => void;
}

function CreateFile({ closeModal }: ICreateFileProps) {
  const { isOpenModal, openModal, closeApproveModal  } = useModal();
  const {handleCreate} = useCreateFile();

  return (
    <div className="create__file">
      <div className="modal__overlay">
        <form className="file__modal-inner" onSubmit={handleCreate}>
          <CloseFileBtn closeModal={closeModal} />
          <CreateFileInner />
          <CreateAddFile />
          <CreateTagAndShare openModal={openModal}/>
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
