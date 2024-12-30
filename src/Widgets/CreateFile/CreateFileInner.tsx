import { useState } from 'react';
import useLocalStorage from '../../Features/hooks/useLocalStorage';
import './CreateFileInner.css';
import AlarmMessage from '../../Shared/UI/AlarmMessage/AlarmMessage';

const MAX_FILE_TITLE_LENGTH = 20;
const MAX_FILE_TEXT_LENGTH = 50;

function CreateFileInner() {

   const [fileTitle, setFileTitle] = useLocalStorage<string>('fileTitle', '');
   const [fileText, setFileText] = useLocalStorage<string>('fileText', '');
   const [isTitleFileMax, setIsTitleFileMax] = useState<boolean>(false);
   const [isTextFileMax, setIsTextFileMax] = useState<boolean>(false);

   const handleFileTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const titleValue = e.target.value;

      if (titleValue.length <= MAX_FILE_TITLE_LENGTH) {
         setFileTitle(titleValue);
         setIsTitleFileMax(false);
      } else {
         setIsTitleFileMax(true); 
      }
   }

   const handleFileTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const textValue = e.target.value;

      if (textValue.length <= MAX_FILE_TEXT_LENGTH) {
         setFileText(textValue);
         setIsTextFileMax(false);
      } else {
         setIsTextFileMax(true);
      }
   }

   return (
      <div className="file__wrapper">
         {isTitleFileMax && <AlarmMessage />}
         <div className="file__title">
            <input className="input__file-title" 
            type="text" 
            name='title'
            placeholder="Заголовок" 
            value={fileTitle}
            onChange={handleFileTitleChange}
            required></input>
            </div>
            {isTextFileMax && <AlarmMessage />}
            <div className="file__text">
               <textarea className="input__file-text" 
               placeholder="Описание (до 50 символов)"
               value={fileText}
               name='description'
               onChange={handleFileTextChange}
               rows={3}
               required>
               </textarea>
            </div>
      </div>
   )
}

export default CreateFileInner;