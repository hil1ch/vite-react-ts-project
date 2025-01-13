import './NoteAddOptions.css';

interface NoteInnerProps {
   note?: {
     title: string;
     text: string;
     tag: string;
   };
 }

function NoteAddOptions({note}: NoteInnerProps) {

   return (
      <div className='options__display'>
         <div className="add__tag">
            <img src="src\images\add-tag.svg" alt="" className="add__tag-img"></img>
            <div className='tag__form'>
               <label className="tag__title" htmlFor="tags">Выберите тег:</label>
               <select className="tags__list" id="tags" name="tag" defaultValue={note?.tag} required>
                  <option value="Учеба">Учеба</option>
                  <option value="Кулинария">Кулинария</option>
                  <option value="Здоровье">Здоровье</option>
                  <option value="Спорт">Спорт</option>
                  <option value="Цели">Цели</option>
                  <option value="Разработка">Разработка</option>
                  <option value="Дизайн">Дизайн</option>
               </select>
            </div>
         </div>
      </div>
   )
}

export default NoteAddOptions;