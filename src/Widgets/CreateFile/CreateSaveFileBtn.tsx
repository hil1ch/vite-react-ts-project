import { useCreateFile } from '../../Features/hooks/useCreateFile';
import './CreateSaveFileBtn.css';

function CreateSaveFileBtn() {
   const {isPending} = useCreateFile();

   return (
      <div className="file__action">
         <button type="submit" className={`file__action-create-btn__save ${isPending ? "isDisabled" : ""}`} disabled={isPending}>
            Сохранить
         </button>
      </div>
   )
}

export default CreateSaveFileBtn;