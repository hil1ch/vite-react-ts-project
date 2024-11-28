import { useState } from 'react';
import './CreateFileInner.css';

const MAX_FILE_TITLE_LENGTH = 20;
const MAX_FILE_TEXT_LENGTH = 50;

function CreateFileInner() {

   const [fileTitle, setFileTitle] = useState<string>('');
   const [fileText, setFileText] = useState<string>('');

   const handleFileTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const titleValue = e.target.value;

      if (titleValue.length <= MAX_FILE_TITLE_LENGTH) {
         setFileTitle(titleValue);
      }
   }

   const handleFileTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const textValue = e.target.value;

      if (textValue.length <= MAX_FILE_TEXT_LENGTH) {
         setFileText(textValue);
      }
   }

   return (
      <div className="file__wrapper">
         <div className="file__title">
            <input className="input__file-title" 
            type="text" 
            placeholder="Заголовок" 
            value={fileTitle}
            onChange={handleFileTitleChange}
            required></input>
            </div>
            <div className="file__text">
               <textarea className="input__file-text" 
               placeholder="Описание (до 50 символов)"
               value={fileText}
               onChange={handleFileTextChange}>
               </textarea>
            </div>
      </div>
   )
}

export default CreateFileInner;