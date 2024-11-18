import './EditSaveFileBtn.css';

function EditSaveFileBtn() {
   return (
      <div className="file__action">
         <button type="submit" className="file__action-edit-btn__save isDisabled">
            Сохранить
         </button>
      </div>
   )
}

export default EditSaveFileBtn;