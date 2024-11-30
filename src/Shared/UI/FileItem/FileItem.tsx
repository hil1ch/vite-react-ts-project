import './FileItem.css';

function FileItem() {
   return (
      <div className="file__link hidden">
         <a href="#" target="_blank" className="file__open-link"></a>
         <button type="button" className="file__delete-button">
            <img className="file__delete-img" src="./images/close-file.svg" alt=""></img>
         </button>
      </div>
   )
}

export default FileItem;