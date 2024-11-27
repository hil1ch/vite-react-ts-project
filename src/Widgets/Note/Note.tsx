import './Note.css';
import NoteInner from './NoteInner';
import NoteOptions from './NoteOptions';
import ShareButton from './ShareButton';
import CloseFileBtn from '../../Shared/CloseFileBtn/CloseFileBtn';

interface ICreateNoteProps {
   closeModal: () => void; // Пропс для закрытия модального окна
 }

function Note({closeModal}: ICreateNoteProps) {
   return (
      <div className="modal__overlay">
         <div className='note'>
            <CloseFileBtn closeModal={closeModal}/> 
            <ShareButton /> 
            <NoteInner />
            <NoteOptions />
         </div>
      </div>
   )
}

export default Note;