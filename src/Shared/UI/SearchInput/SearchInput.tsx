import './SearchInput.css';

function SearchInput() {
   return (
      <div>
         <form className='search__form'>
            <label className="search__title" htmlFor="search__tags">Сортировка по тегу:</label>
            <select className="search__tags-list" id="search__tags" name="search__tags">
               <option value="Все">Все</option>
               <option value="Учеба">Учеба</option>
               <option value="Кулинария">Кулинария</option>
               <option value="Здоровье">Здоровье</option>
               <option value="Спорт">Спорт</option>
               <option value="Цели">Цели</option>
               <option value="Цели">Разработка</option>
               <option value="Цели">Дизайн</option>
            </select>
         </form>
      </div>
   )
}

export default SearchInput;