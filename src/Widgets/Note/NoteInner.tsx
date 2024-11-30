import { useState } from 'react';
import './NoteInner.css';

const MAX_NOTE_TITLE_LENGTH = 30;

function NoteInner() {

   const [noteTitle, setNoteTitle] = useState<string>('');

   const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const titleValue = e.target.value;

      if (titleValue.length <= MAX_NOTE_TITLE_LENGTH) {
         setNoteTitle(titleValue);
      }
   }

   return (
      <div className="note__wrapper">
         <div className="note__title">
               <input className="input__note-title" 
               type="text" 
               placeholder="Заголовок" 
               value={noteTitle}
               onChange={handleTitleChange} 
               required>
               </input>
            </div>
            <div className="note__text">
               <textarea className="input__note-text" placeholder="Текст" required></textarea>
         </div>
      </div>
   )
}

export default NoteInner;