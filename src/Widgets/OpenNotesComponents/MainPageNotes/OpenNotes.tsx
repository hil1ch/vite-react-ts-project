import MainPageNote from "../../../Entities/MainPageNote/MainPageNote";
import "./OpenNotes.css";

function OpenNotes() {
  return (
    <div className="main__page-notes">
      <div className="open__notes-title__inner">
        <h3 className="open__notes-title">Открытые заметки</h3>
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

export default OpenNotes;
