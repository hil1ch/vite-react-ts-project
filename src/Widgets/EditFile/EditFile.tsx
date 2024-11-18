import CloseFileBtn from '../../Shared/CloseFileBtn/CloseFileBtn';
import './EditFile.css';
import EditFileInner from './EditFileInner';
import EditFileOptions from './EditFileOptions';
import EditFileShare from './EditFileShare';
import EditSaveFileBtn from './EditSaveFileBtn';

function EditFile() {
   return (
      <div className="edit__file">
         <div className="modal__overlay">
            <section className="file__modal-inner">
               <CloseFileBtn />
               <EditFileInner />
               <EditFileShare />
               <EditFileOptions />
               <EditSaveFileBtn />
            </section>
         </div>
      </div>
   )
}

export default EditFile;