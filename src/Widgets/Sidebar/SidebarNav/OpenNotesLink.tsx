import { NavLink } from 'react-router-dom';
import './OpenNotesLink.css';

function OpenNotesLink() {
   return (
      <div className="sidebar__item">
         <img src="src\images\notes.svg" alt="" className="sidebar__img"></img>
         <NavLink className="sidebar__item-link" to="/openNotes">Заметки</NavLink>
      </div>
   )
}

export default OpenNotesLink;