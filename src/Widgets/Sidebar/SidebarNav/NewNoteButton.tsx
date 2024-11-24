import { useState } from 'react';
import './NewNoteButton.css';
import NotePage from '../../../Pages/NotePage/NotePage';


function NewNoteButton() {

   const [isNoteOpen, setIsNoteOpen] = useState(false);

   const openNoteClick = () => {
      setIsNoteOpen(true);
    };

   return (
   <div className="sidebar__btn">
      <button className="sidebar__btn-note" onClick={openNoteClick}>
         <img src="src\images\new-note.svg" alt="" className="sidebar__img"></img>
         <p className="sidebar__text-btn">Новая заметка</p>
      </button>
      {isNoteOpen && <NotePage />} 
   </div>
)}

export default NewNoteButton;