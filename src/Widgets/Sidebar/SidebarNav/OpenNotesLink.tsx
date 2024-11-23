import './OpenNotesLink.css';

function OpenNotesLink() {
   return (
      <div className="sidebar__item active">
         <img src="src\images\notes.svg" alt="" className="sidebar__img"></img>
         <a className="sidebar__item-link" href="#">Заметки</a>
      </div>
   )
}

export default OpenNotesLink;