import { useCreateFile } from '../../Features/hooks/useCreateFile';
import { useToggleFile } from '../../Features/hooks/useToggleFile';
import './CreateSaveFileBtn.css';

export interface IFile {
   id: string;
   done: boolean;
}

interface IFileActionsProps {
   file: IFile
}

function CreateSaveFileBtn({file} : IFileActionsProps) {
   const {isPending} = useCreateFile();
   const {toggleFile} = useToggleFile();

   return (
      <div className="file__action">
         <button type="submit" className={`file__action-create-btn__save ${isPending ? "isDisabled" : ""}`} disabled={isPending} onChange={() => toggleFile(file.id, file.done)}>
            Сохранить
         </button>
      </div>
   )
}

export default CreateSaveFileBtn;