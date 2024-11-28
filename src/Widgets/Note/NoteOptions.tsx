import NoteActions from './NoteActions';
import NoteAddOptions from './NoteAddOptions';
import './NoteOptions.css';

interface INoteOptionsProps {
   openModal: (type: string) => void; // Пропс для открытия модального окна
 }

function NoteOptions({openModal}: INoteOptionsProps) {
   return (
      <div className="note__options">
         <NoteAddOptions />        
         <NoteActions openModal={openModal}/>
      </div>
   )
}

export default NoteOptions;