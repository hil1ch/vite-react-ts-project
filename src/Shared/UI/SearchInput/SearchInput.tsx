import './SearchInput.css';

interface SearchInputProps {
   onTagChange: (tag: string) => void;
 }

function SearchInput({ onTagChange }: SearchInputProps) {
   return (
      <div>
         <form className='search__form'>
            <label className="search__title" htmlFor="search__tags">Сортировка по тегу:</label>
            <select
               className="search__tags-list"
               id="search__tags"
               name="search__tags"
               onChange={(e) => onTagChange(e.target.value)}
            >
               <option value="Все">Все</option>
               <option value="Учеба">Учеба</option>
               <option value="Кулинария">Кулинария</option>
               <option value="Здоровье">Здоровье</option>
               <option value="Спорт">Спорт</option>
               <option value="Цели">Цели</option>
               <option value="Разработка">Разработка</option>
               <option value="Дизайн">Дизайн</option>
            </select>
         </form>
      </div>
   )
}

export default SearchInput;