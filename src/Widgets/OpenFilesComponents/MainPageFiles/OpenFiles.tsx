import MainPageFile from '../../../Shared/MainPageFile/MainPageFile';
import './OpenFiles.css';

function OpenFiles() {
   return (
      <div className="main__page-files">
         <div className="open__files-title__inner">
            <h3 className="open__files-title">Файлы</h3>
         </div>
         <div className="main__page-files__list">
            <MainPageFile />
         </div>
      </div>
   )
}

export default OpenFiles;