import './NewNoteButton.css';

function NewNoteButton() {
   return (
   <div className="sidebar__btn">
      <button className="sidebar__btn-note">
         <img src="src\images\new-note.svg" alt="" className="sidebar__img"></img>
         <p className="sidebar__text-btn">Новая заметка</p>
      </button>
   </div>
)}

export default NewNoteButton;