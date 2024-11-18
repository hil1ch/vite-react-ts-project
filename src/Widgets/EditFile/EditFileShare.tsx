import './EditFileShare.css';

function EditFileShare() {
   return (
      <div className="file__edit-share__btn">
         <button type="button" className="file__share-button">
            <img src="src\images\share.svg" alt="" className="file__share-img"></img>
            <p className="file__text-btn">Поделиться</p>
         </button>
      </div>
   )
}

export default EditFileShare;