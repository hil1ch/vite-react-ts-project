import MainPageFile from '../../../Shared/MainPageFile/MainPageFile';
import './MainPageFiles.css';

function MainPageFiles() {
   return (
      <div className="main__page-files">
         <div className="open__files-title__inner">
            <h3 className="open__files-title">Файлы</h3>
            <a href="#" className="open__files-link">
               Смотреть все
            </a>
         </div>
         <div className="main__page-files__list">
            <MainPageFile />
         </div>
      </div>
   )
}

export default MainPageFiles;