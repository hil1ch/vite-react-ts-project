import'./ShareButton.css';

function ShareButton() {
   return (
      <div className="note__share">
         <p className="note__status">Чтение</p>
         <div className="note__share-btn">
            <button type="button" className="note__share-button">
               <img src="src\images\share.svg" alt="" className="note__share-img"></img>
               <p className="note__text-btn">Поделиться</p>
            </button>
         </div>
      </div>
   )
}

export default ShareButton;