import NoteActions from './NoteActions';
import NoteAddOptions from './NoteAddOptions';
import './NoteOptions.css';

function NoteOptions() {
   return (
      <div className="note__options">
         <NoteAddOptions />        
         <NoteActions />
      </div>
   )
}

export default NoteOptions;