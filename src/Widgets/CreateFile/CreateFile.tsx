import CloseFileBtn from '../../Shared/CloseFileBtn/CloseFileBtn';
import CreateFileInner from './CreateFileInner';
import './CreateFile.css';
import CreateAddFile from './CreateAddFile';
import CreateTagAndShare from './CreateTagAndShare';
import CreateSaveFileBtn from './CreateSaveFileBtn';

interface ICreateFileProps {
   closeModal?: () => void;
 }

function CreateFile({closeModal}: ICreateFileProps) {
   return (
      <div className="create__file">
         <div className="modal__overlay">
            <section className="file__modal-inner">
               <CloseFileBtn closeModal={closeModal}/>
               <CreateFileInner />
               <CreateAddFile />
               <CreateTagAndShare />
               <CreateSaveFileBtn />
            </section>
         </div>
      </div>
   )
}

export default CreateFile;