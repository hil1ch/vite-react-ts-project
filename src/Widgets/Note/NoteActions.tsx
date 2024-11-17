import './NoteActions.css';

function NoteActions() {
   return (
      <div className="note__actions">
         <div className="note__action">
            <button type="button" className="note__action-btn save isDisabled">
               <img src="src\images\save.svg" alt="" className="note__img"></img>
               <p className="note__text-btn__save">Сохранить</p>
            </button>
         </div>
         <div className="note__action">
            <button type="button" className="note__action-btn delete">
               <img src="src\images\delete.svg" alt="" className="note__img"></img>
               <p className="note__text-btn__delete">Удалить</p>
            </button>
         </div>
      </div>
   )
}

export default NoteActions;