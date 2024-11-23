import './MyNotesLink.css';

function MyNotesLink() {
   return (
      <div className="sidebar__item active">
         <img src="src\images\notes.svg" alt="" className="sidebar__img"></img>
         <a className="sidebar__item-link" href="#">Мои заметки</a>
      </div>
   )
}

export default MyNotesLink;