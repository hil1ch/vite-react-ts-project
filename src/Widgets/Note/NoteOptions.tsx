import NoteActions from './NoteActions';
import NoteAddOptions from './NoteAddOptions';
import './NoteOptions.css';

interface INoteOptionsProps {
   openModal: (type: string) => void; // Пропс для открытия модального окна
   isNoteCreated: boolean;
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