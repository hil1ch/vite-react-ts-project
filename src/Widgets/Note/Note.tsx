import './Note.css';
import NoteInner from './NoteInner';
import NoteOptions from './NoteOptions';
import ShareButton from './ShareButton';

function Note() {
   return (
      <div className="modal__overlay">
         <div className='note'>
            <ShareButton /> 
            <NoteInner />
            <NoteOptions />
         </div>
      </div>
   )
}

export default Note;