import './CreateAddFile.css';

function CreateAddFile() {
   return (
      <div className="add__file">
         <div className="add__file-inner">
            <img src="src\images\add-file.svg" alt="" className="add__file-img"></img>
            <input type="file" className="add__file-input"></input>
         </div>
         <div className="file__link hidden">
            <a href="#" target="_blank" className="file__open-link"></a>
            <button type="button" className="file__delete-button">
               <img className="file__delete-img" src="src\images\close-file.svg" alt=""></img>
            </button>
         </div>
      </div>
   )
}

export default CreateAddFile;