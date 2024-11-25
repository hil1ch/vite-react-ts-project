import { NavLink } from 'react-router-dom';
import './MyFilesLink.css';

function MyFilesLink() {
   return (
   <div className="sidebar__item">
      <img src="src\images\file.svg" alt="" className="sidebar__img"></img>
      <NavLink className="sidebar__item-link" to="/myFiles">Мои файлы</NavLink>
   </div>
)}

export default MyFilesLink;