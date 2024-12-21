import { useState } from 'react';
import './SearchInput.css';

interface SearchInputProps {
  onTagChange: (tag: string) => void;
}

function SearchInput({ onTagChange }: SearchInputProps) {
  const [selectedTag, setSelectedTag] = useState("Все");

  const handleTagChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const tag = event.target.value;
    setSelectedTag(tag);
    onTagChange(tag);
  };

  return (
    <div>
      <form className='search__form'>
        <label className="search__title" htmlFor="search__tags">Сортировка по тегу:</label>
        <select
          className="search__tags-list"
          id="search__tags"
          name="search__tags"
          value={selectedTag}
          onChange={handleTagChange}
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
  );
}

export default SearchInput;
