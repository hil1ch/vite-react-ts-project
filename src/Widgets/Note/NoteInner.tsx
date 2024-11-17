import './NoteInner.css';

function NoteInner() {
   return (
      <div className="note__wrapper">
         <div className="note__title">
               <input className="input__note-title" type="text" placeholder="Заголовок" required></input>
            </div>
            <div className="note__text">
               <textarea className="input__note-text" placeholder="Текст"></textarea>
         </div>
      </div>
   )
}

export default NoteInner;