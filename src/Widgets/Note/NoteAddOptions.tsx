import './NoteAddOptions.css';

function NoteAddOptions() {
   return (
      <div className='options__display'>
         <div className="note__add-options">
            <div className="add__file">
               <div className="add__file-inner">
                  <img src="src\images\add-file.svg" alt="" className="add__file-img"></img>
                  <input type="file" className="add__file-input"></input>
               </div>
            </div>
         </div>
         <div className="add__tag">
            <img src="src\images\add-tag.svg" alt="" className="add__tag-img"></img>
            <input type="text" id="tag" name="tag" list="tag-options" placeholder="Добавить тег"></input>
            <datalist id="tag-options">
               <option value="Тег1 "></option>
               <option value="Тег 2"></option>
               <option value="Тег 3"></option>
            </datalist>
         </div>
      </div>
   )
}

export default NoteAddOptions;