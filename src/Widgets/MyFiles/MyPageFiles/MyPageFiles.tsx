import MyPageFile from '../../../Shared/MyPageFile/MyPageFile';
import './MyPageFiles.css';

function MyPageFiles() {
   return (
      <div className="my__page-files">
         <div className="my__files-title__inner">
            <h3 className="my__files-title">Мои файлы</h3>
         </div>
         <div className="my__page-files__list">
            <MyPageFile />
         </div>
      </div>
   )
}

export default MyPageFiles;