import './CreateFileInner.css';

function CreateFileInner() {
   return (
      <div className="file__wrapper">
         <div className="file__title">
            <input className="input__file-title" type="text" placeholder="Заголовок" required></input>
            </div>
            <div className="file__text">
               <textarea className="input__file-text" placeholder="Описание (до 50 символов)"></textarea>
            </div>
      </div>
   )
}

export default CreateFileInner;