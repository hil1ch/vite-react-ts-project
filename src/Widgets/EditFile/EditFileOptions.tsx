import './EditFileOptions.css';

interface IEditFileOptionsProps {
   openModal: (type: string) => void; // Пропс для открытия модального окна
 }

function EditFileOptions({openModal}: IEditFileOptionsProps) {
   return (
      <div className="file__edit-options">
         <div className="add__tag">
            <img src="src\images\add-tag.svg" alt="" className="add__tag-img"></img>
            <input type="text" id="tag" name="tag" list="tag-options" placeholder="Добавить тег"></input>
            <datalist id="tag-options">
               <option value="Тег1"></option>
               <option value="Тег2"></option>
               <option value="Тег3"></option>
            </datalist>
         </div>
         <div className="file__action">
            <button type="button" className="file__action-edit-btn__delete" onClick={() => openModal('approveDeleteFile')}>
               <img src="src\images\delete.svg" alt="" className="note__img"></img>
               Удалить
            </button>
         </div>
      </div>
   )
}

export default EditFileOptions;