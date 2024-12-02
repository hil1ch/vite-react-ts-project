import PlaceholderFilePageImage from '../../../Shared/UI/PlaceholderFilePageImage/PlaceholderFilePageImage';
import './MyPageFiles.css';

function MyPageFiles() {
   return (
      <div className="my__page-files">
         <div className="my__files-title__inner">
            <h3 className="my__files-title">Мои файлы</h3>
         </div>
         <div className="my__page-files__list">
            <PlaceholderFilePageImage />
         </div>
      </div>
   )
}

export default MyPageFiles;