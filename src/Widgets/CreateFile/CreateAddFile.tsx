import './CreateAddFile.css';
import FileItem from '../../Shared/UI/FileItem/FileItem';

function CreateAddFile() {
   return (
      <div className="add__file">
         <div className="add__file-inner">
            <img src="src\images\add-file.svg" alt="" className="add__file-img"></img>
            <input type="file" className="add__file-input"></input>
         </div>
         <FileItem />
      </div>
   )
}

export default CreateAddFile;