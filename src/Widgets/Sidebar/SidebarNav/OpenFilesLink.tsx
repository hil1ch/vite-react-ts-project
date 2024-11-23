import './OpenFilesLink.css';

function OpenFilesLink() {
   return (
      <div className="sidebar__item active">
         <img src="src\images\file.svg" alt="" className="sidebar__img"></img>
         <a className="sidebar__item-link" href="#">Файлы</a>
      </div>
   )
}

export default OpenFilesLink;