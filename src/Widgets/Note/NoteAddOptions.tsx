import './NoteAddOptions.css';
import FileItem from '../../Shared/UI/FileItem/FileItem';

function NoteAddOptions() {
   return (
      <div className='options__display'>
         <div className="note__add-options">
            <div className="add__file">
               <div className="add__file-inner">
                  <img src="src\images\add-file.svg" alt="" className="add__file-img"></img>
                  <input type="file" className="add__file-input"></input>
               </div>
               <FileItem />
            </div>
         </div>
         <div className="add__tag">
            <img src="src\images\add-tag.svg" alt="" className="add__tag-img"></img>
            <form className='tag__form'>
               <label className="tag__title" htmlFor="fruits">Выберите тег:</label>
               <select className="tags__list" id="fruits" name="fruits">
                  <option value="Учеба">Учеба</option>
                  <option value="Кулинария">Кулинария</option>
                  <option value="Здоровье">Здоровье</option>
                  <option value="Спорт">Спорт</option>
                  <option value="Цели">Цели</option>
               </select>
            </form>
         </div>
      </div>
   )
}

export default NoteAddOptions;