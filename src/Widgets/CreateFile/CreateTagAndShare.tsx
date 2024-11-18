import './CreateTagAndShare.css';

function CreateTagAndShare() {
   return (
      <div className="tag-and-share">
         <div className="add__tag">
            <img src="src\images\add-tag.svg" alt="" className="add__tag-img"></img>
            <input type="text" id="tag" name="tag" list="tag-options" placeholder="Добавить тег"></input>
            <datalist id="tag-options">
               <option value="Тег1 "></option>
               <option value="Тег2"></option>
               <option value="Тег3"></option>
            </datalist>
         </div>
         <div className="file__share-btn">
            <button type="button" className="file__share-button">
               <img src="src\images\share.svg" alt="" className="file__share-img"></img>
               <p className="file__text-btn">Поделиться</p>
            </button>
         </div>
      </div>
   )
}

export default CreateTagAndShare;