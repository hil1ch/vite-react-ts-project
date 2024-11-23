import './MyFilesLink.css';

function MyFilesLink() {
   return (
   <div className="sidebar__item active">
      <img src="src\images\file.svg" alt="" className="sidebar__img"></img>
      <a className="sidebar__item-link" href="#">Мои файлы</a>
   </div>
)}

export default MyFilesLink;