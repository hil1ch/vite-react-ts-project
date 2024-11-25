import { NavLink } from 'react-router-dom';
import './MyNotesLink.css';

function MyNotesLink() {
   return (
      <div className="sidebar__item">
         <img src="src\images\notes.svg" alt="" className="sidebar__img"></img>
         <NavLink className="sidebar__item-link" to="/myNotes">Мои заметки</NavLink>
      </div>
   )
}

export default MyNotesLink;