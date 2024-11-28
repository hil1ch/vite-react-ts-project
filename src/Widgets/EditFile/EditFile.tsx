import { useModal } from '../../Features/hooks/useModal';
import CloseFileBtn from '../../Shared/CloseFileBtn/CloseFileBtn';
import './EditFile.css';
import EditFileInner from './EditFileInner';
import EditFileOptions from './EditFileOptions';
import EditFileShare from './EditFileShare';
import EditSaveFileBtn from './EditSaveFileBtn';
import ApproveDeleteFile from '../ApproveDeleteFile/ApproveDeleteFile';

function EditFile() {

   const { isOpenModal, openModal, closeModal } = useModal();

   return (
      <div className="edit__file">
         <div className="modal__overlay">
            <section className="file__modal-inner">
               <CloseFileBtn />
               <EditFileInner />
               <EditFileShare />
               <EditFileOptions openModal={openModal}/>
               <EditSaveFileBtn />
               {isOpenModal === 'approveDeleteFile' && <ApproveDeleteFile closeModal={closeModal} />}
            </section>
         </div>
      </div>
   )
}

export default EditFile;