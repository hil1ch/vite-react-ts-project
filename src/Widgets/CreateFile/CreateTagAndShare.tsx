import { useModal } from "../../Features/hooks/useModal";
import "./CreateTagAndShare.css";
import ShareModal from "../../Shared/UI/ShareModal/ShareModal";

function CreateTagAndShare() {
  const { isOpenModal, openModal, closeModal } = useModal();

  return (
    <div className="tag-and-share">
      <div className="add__tag">
        <img src="src\images\add-tag.svg" alt="" className="add__tag-img"></img>
        <input
          type="text"
          id="tag"
          name="tag"
          list="tag-options"
          placeholder="Добавить тег"
        ></input>
        <datalist id="tag-options">
          <option value="Тег1 "></option>
          <option value="Тег2"></option>
          <option value="Тег3"></option>
        </datalist>
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
