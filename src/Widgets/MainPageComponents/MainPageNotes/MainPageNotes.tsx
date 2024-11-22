import MainPageNote from "../../../Shared/MainPageNote/MainPageNote";
import "./MainPageNotes.css";

function MainPageNotes() {
  return (
    <div className="main__page-notes">
      <div className="open__notes-title__inner">
        <h3 className="open__notes-title">Открытые заметки</h3>
        <a href="#" className="open__notes-link">
          Смотреть все
        </a>
      </div>
      <p className="open__notes-description">
        Заметки, созданные другими пользователями
      </p>
      <div className="main__page-notes-list">
        <MainPageNote />
      </div>
    </div>
  );
}

export default MainPageNotes;
