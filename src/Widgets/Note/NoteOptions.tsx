import NoteActions from './NoteActions';
import NoteAddOptions from './NoteAddOptions';
import './NoteOptions.css';

export interface INote {
   id: string;
   done: boolean;
}

interface INoteOptionsProps {
   openModal: (type: string) => void; // Пропс для открытия модального окна
   isNoteCreated: boolean;
   note?: INote
}

function NoteOptions({openModal, isNoteCreated}: INoteOptionsProps) {
   return (
      <div className="note__options">
         <NoteAddOptions />        
         <NoteActions openModal={openModal} isNoteCreated={isNoteCreated}/>
      </div>
   )
}

export default NoteOptions;