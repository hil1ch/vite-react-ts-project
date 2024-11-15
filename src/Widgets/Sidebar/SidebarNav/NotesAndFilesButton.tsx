import './NotesAndFilesButton.css';

function NotesAndFilesButton() {
   return (
   <div className="sidebar__item active">
      <img src="src\images\notes.svg" alt="" className="sidebar__img"></img>
      <a className="sidebar__item-link" href="#">Заметки и файлы</a>
   </div>
)}

export default NotesAndFilesButton;