import { useState } from 'react';
import './NewFileButton.css';
import CreateFilePage from '../../../Pages/CreateFilePage/CreateFilePage';

function NewFileButton() {

   const [isFileOpen, setIsFileOpen] = useState(false);

   const openFileClick = () => {
      setIsFileOpen(true);
    };

   return (
   <div className="sidebar__btn">
      <button className="sidebar__btn-file" onClick={openFileClick}>
         <img src="src\images\new-file.svg" alt="" className="sidebar__img"></img>
         <p className="sidebar__text-btn">Новый файл</p>
      </button>
      {isFileOpen && <CreateFilePage />}
   </div>
)}

export default NewFileButton;