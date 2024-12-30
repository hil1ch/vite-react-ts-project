import "./CreateTagAndShare.css";

function CreateTagAndShare() {

  return (
    <div className="tag-and-share">
      <div className="add__tag">
        <img src="src\images\add-tag.svg" alt="" className="add__tag-img"></img>
        <div className='tag__form'>
          <label className="tag__title" htmlFor="tags">Выберите тег:</label>
          <select className="tags__list" id="tags" name="tagsNames" required>
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
  );
}

export default CreateTagAndShare;
