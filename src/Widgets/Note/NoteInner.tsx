import { useState } from 'react';
import './NoteInner.css';
import AlarmMessage from '../../Shared/UI/AlarmMessage/AlarmMessage';

interface NoteInnerProps {
   note?: {
     title: string;
     text: string;
     tag: string;
   };
 }

const MAX_NOTE_TITLE_LENGTH = 30;

function NoteInner({note}: NoteInnerProps) {
   const [noteTitle, setNoteTitle] = useState<string>(note?.title || '');
   const [noteText, setNoteText] = useState<string>(note?.text || '');
   const [isTitleNoteMax, setIsTitleNoteMax] = useState<boolean>(false);

   const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const titleValue = e.target.value;

      if (titleValue.length <= MAX_NOTE_TITLE_LENGTH) {
         setNoteTitle(titleValue);
         setIsTitleNoteMax(false);
      } else {
         setIsTitleNoteMax(true);
      }
   };

   const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setNoteText(e.target.value);
   };

   return (
      <div className="note__wrapper">
         {isTitleNoteMax && <AlarmMessage />}
         <div className="note__title">
            <input
               className="input__note-title"
               name='title'
               type="text"
               placeholder="Заголовок"
               value={noteTitle}
               onChange={handleTitleChange}
               required
            />
         </div>
         <div className="note__text">
            <textarea
               className="input__note-text"
               placeholder="Текст"
               name='text'
               rows={18}
               value={noteText}
               onChange={handleTextChange}
               required
            ></textarea>
         </div>
      </div>
   );
}

export default NoteInner;