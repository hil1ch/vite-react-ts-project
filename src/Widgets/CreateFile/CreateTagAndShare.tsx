import { useModal } from "../../Features/hooks/useModal";
import "./CreateTagAndShare.css";
import ShareModal from "../../Shared/UI/ShareModal/ShareModal";

function CreateTagAndShare() {
  const { isOpenModal, openModal, closeModal } = useModal();

  return (
    <div className="tag-and-share">
      <div className="add__tag">
        <img src="src\images\add-tag.svg" alt="" className="add__tag-img"></img>
        <form className='tag__form'>
          <label className="tag__title" htmlFor="tags">Выберите тег:</label>
          <select className="tags__list" id="tags" name="tags" required>
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
      <div className="file__share-btn">
        <button
          type="button"
          className="file__share-button"
          onClick={() => openModal("share")}
        >
          <img
            src="src\images\share.svg"
            alt=""
            className="file__share-img"
          ></img>
          <p className="file__text-btn">Поделиться</p>
        </button>
      </div>
      {isOpenModal === "share" && <ShareModal closeModal={closeModal} />}
    </div>
  );
}

export default CreateTagAndShare;
