import { useModal } from "../../Features/hooks/useModal";
import { useParams } from "react-router-dom";
import { useCreateNote } from "../../Features/hooks/useCreateNote";
import { useToggleNote } from "../../Features/hooks/useToggleNote";
import "./Note.css";
import NoteInner from "./NoteInner";
import NoteOptions from "./NoteOptions";
import CloseFileBtn from "../../Shared/UI/CloseFileBtn/CloseFileBtn";
import ApproveDeleteNote from "../ApproveDeleteNote/ApproveDeleteNote";
import { toast } from "react-toastify";

export interface INote {
  id: string;
  done: boolean;
}

interface ICreateNoteProps {
  closeModal?: () => void; // Пропс для закрытия модального окна
}

function Note({ closeModal }: ICreateNoteProps) {
  const { isOpenModal, openModal, closeModal: closeShareModal } = useModal();
  const {handleCreate} = useCreateNote();
  const {toggleNote} = useToggleNote();

  const { id } = useParams<{ id: string }>();
  const isNoteCreated = !id;

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();

    if (isNoteCreated) {
      handleCreate(e as React.FormEvent<HTMLFormElement>);
      toast.success("Заметка успешно создана!");
    } else {
      toggleNote(id, !isNoteCreated);
      toast.success("Заметка успешно обновлена!");
    }

    if (closeModal) {
      closeModal();
    }
  }

  return (
    <div className="modal__overlay">
      <form className="note" onSubmit={handleSubmit}>
        <CloseFileBtn closeModal={closeModal} />
        <NoteInner />
        <NoteOptions openModal={() => openModal("approveDelete")} isNoteCreated={isNoteCreated}/>
        {isOpenModal === "approveDelete" && (
          <ApproveDeleteNote closeModal={closeShareModal} />
        )}
      </form>
    </div>
  );
}

export default Note;
