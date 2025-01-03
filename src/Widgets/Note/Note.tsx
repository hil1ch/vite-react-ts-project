import { useModal } from "../../Features/hooks/useModal";
import { useParams } from "react-router-dom";
import { useCreateNote } from "../../Features/hooks/useCreateNote";
import "./Note.css";
import NoteInner from "./NoteInner";
import NoteOptions from "./NoteOptions";
import CloseFileBtn from "../../Shared/UI/CloseFileBtn/CloseFileBtn";
import ApproveDeleteNote from "../ApproveDeleteNote/ApproveDeleteNote";

interface ICreateNoteProps {
  closeModal?: () => void; // Пропс для закрытия модального окна
}

function Note({ closeModal }: ICreateNoteProps) {
  const { isOpenModal, openModal, closeModal: closeShareModal } = useModal();
  const {handleCreate} = useCreateNote();

  const { noteId } = useParams<{ noteId: string }>();
   const isNoteCreated = !noteId;

  return (
    <div className="modal__overlay">
      <form className="note" onSubmit={handleCreate}>
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
