import CloseFileBtn from '../../Shared/CloseFileBtn/CloseFileBtn';
import CreateFileInner from './CreateFileInner';
import './CreateFile.css';
import CreateAddFile from './CreateAddFile';
import CreateTagAndShare from './CreateTagAndShare';
import CreateSaveFileBtn from './CreateSaveFileBtn';

function CreateFile() {
   return (
      <div className="create__file">
         <div className="modal__overlay">
            <section className="file__modal-inner">
               <CloseFileBtn />
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