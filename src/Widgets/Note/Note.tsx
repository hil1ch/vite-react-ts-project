import { useModal } from "../../Features/hooks/useModal";
import "./Note.css";
import NoteInner from "./NoteInner";
import NoteOptions from "./NoteOptions";
import ShareButton from "./ShareButton";
import CloseFileBtn from "../../Shared/UI/CloseFileBtn/CloseFileBtn";
import ShareModal from "../../Shared/UI/ShareModal/ShareModal";
import ApproveDeleteNote from "../ApproveDeleteNote/ApproveDeleteNote";

interface ICreateNoteProps {
  closeModal?: () => void; // Пропс для закрытия модального окна
}

function Note({ closeModal }: ICreateNoteProps) {
  const { isOpenModal, openModal, closeModal: closeShareModal } = useModal();

  return (
    <div className="modal__overlay">
      <div className="note">
        <CloseFileBtn closeModal={closeModal} />
        <ShareButton openModal={openModal} />
        <NoteInner />
        <NoteOptions openModal={() => openModal("approveDelete")} />
        {isOpenModal === "share" && <ShareModal closeModal={closeShareModal} />}
        {isOpenModal === "approveDelete" && (
          <ApproveDeleteNote closeModal={closeShareModal} />
        )}
      </div>
    </div>
  );
}

export default Note;
