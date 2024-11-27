import './NewNoteButton.css';

interface INewNoteButtonProps {
   onClick: () => void; // Пропс для вызова открытия модального окна
 }

function NewNoteButton({onClick}: INewNoteButtonProps) {
   return (
   <div className="sidebar__btn">
      <button className="sidebar__btn-note" onClick={onClick}>
         <img src="src\images\new-note.svg" alt="" className="sidebar__img"></img>
         <p className="sidebar__text-btn">Новая заметка</p>
      </button>
   </div>
)}

export default NewNoteButton;