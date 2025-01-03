import { useCreateNote } from '../../Features/hooks/useCreateNote';
import './NoteActions.css';

interface INoteActionsProps {
   openModal?: (type: string) => void; // Пропс для открытия модального окна
   isNoteCreated: boolean; // Пропс для определения, создается ли новая заметка
}

function NoteActions({ openModal, isNoteCreated }: INoteActionsProps) {
   const { isPending } = useCreateNote();

   return (
      <div className="note__actions">
         <div className="note__action">
            <button
               type="submit"
               className={`note__action-btn save ${isPending ? "isDisabled" : ""}`}
               disabled={isPending}
            >
               <img src="src/images/save.svg" alt="" className="note__img" />
               <p className="note__text-btn__save">Сохранить</p>
            </button>
         </div>
         <div className="note__action">
            <button
               type="button"
               className={`note__action-btn delete ${isNoteCreated ? "isDisabled" : ""}`}
               onClick={() => openModal?.('approveDelete')}
               disabled={isNoteCreated}
            >
               <img src="src/images/delete.svg" alt="" className="note__img" />
               <p className="note__text-btn__delete">Удалить</p>
            </button>
         </div>
      </div>
   );
}

export default NoteActions;
