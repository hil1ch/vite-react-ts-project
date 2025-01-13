import { useCreateNote } from '../../Features/hooks/useCreateNote';
import './NoteActions.css';

export interface INote {
   id: string;
   done: boolean;
}

interface INoteActionsProps {
   isNoteCreated: boolean; // Пропс для определения, создается ли новая заметка
}

function NoteActions({ isNoteCreated }: INoteActionsProps) {

   const { isPending } = useCreateNote();

   return (
      <div className="note__actions">
         <div className="note__action">
            <button
               type="submit"
               className={`note__action-btn save ${isPending || !isNoteCreated ? "isDisabled" : ""}`}
               disabled={isPending || !isNoteCreated}
            >
               <img src="src/images/save.svg" alt="" className="note__img" />
               <p className="note__text-btn__save">Сохранить</p>
            </button>
         </div>
      </div>
   );
}

export default NoteActions;