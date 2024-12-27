import { useModal } from "../../Features/hooks/useModal";
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

  return (
    <div className="modal__overlay">
      <form className="note">
        <CloseFileBtn closeModal={closeModal} />
        <NoteInner />
        <NoteOptions openModal={() => openModal("approveDelete")} />
        {isOpenModal === "approveDelete" && (
          <ApproveDeleteNote closeModal={closeShareModal} />
        )}
      </form>
    </div>
  );
}

export default Note;
