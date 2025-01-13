import { useModal } from "../../Features/hooks/useModal";
import { useCreateNote } from "../../Features/hooks/useCreateNote";
import { useToggleNote } from "../../Features/hooks/useToggleNote";
import "./Note.css";
import NoteInner from "./NoteInner";
import NoteOptions from "./NoteOptions"; // Импортируем NoteOptions
import CloseFileBtn from "../../Shared/UI/CloseFileBtn/CloseFileBtn";
import ApproveDeleteNote from "../ApproveDeleteNote/ApproveDeleteNote";
import { toast } from "react-toastify";

interface ICreateNoteProps {
  closeModal?: () => void; // Пропс для закрытия модального окна
  note?: {
    id?: string;
    userId: string;
    title: string;
    text: string;
    email: string;
    tag: string;
  };
}

function Note({ closeModal, note }: ICreateNoteProps) {
  const { isOpenModal, closeModal: closeShareModal } = useModal();
  const { handleCreate } = useCreateNote();
  const { toggleNote } = useToggleNote();

  const isNoteCreated = !note?.id;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isNoteCreated) {
      handleCreate(e as React.FormEvent<HTMLFormElement>);
      toast.success("Заметка успешно создана!");
    } else {
      toggleNote(note.id!, !isNoteCreated);
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
        <NoteInner note={note} />
        <NoteOptions
          isNoteCreated={isNoteCreated}
          note={note}
        />
        {isOpenModal === "approveDelete" && (
          <ApproveDeleteNote closeModal={closeShareModal} />
        )}
      </form>
    </div>
  );
}

export default Note;