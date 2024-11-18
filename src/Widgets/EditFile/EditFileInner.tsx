import './EditFileInner.css';

function EditFileInner() {
   return (
      <div className="file__wrapper">
         <div className="file__title">
            <input className="input__edit-file__title" type="text" placeholder="Заголовок" required></input>
         </div>
         <div className="file__text">
            <textarea className="input__edit-file__text" placeholder="Описание (до 50 символов)"></textarea>
         </div>
      </div>
   )
}

export default EditFileInner;