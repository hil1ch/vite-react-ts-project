import { NavLink } from 'react-router-dom';
import './OpenFilesLink.css';

function OpenFilesLink() {
   return (
      <div className="sidebar__item">
         <img src="src\images\file.svg" alt="" className="sidebar__img"></img>
         <NavLink className="sidebar__item-link" to="/openFiles">Файлы</NavLink>
      </div>
   )
}

export default OpenFilesLink;