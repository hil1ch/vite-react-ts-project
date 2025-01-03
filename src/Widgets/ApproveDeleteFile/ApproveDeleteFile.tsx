import { useDeleteFile } from '../../Features/hooks/useDeleteFile';
import './ApproveDeleteFile.css';

interface IApproveDeleteFileProps {
   closeModal: () => void; // Функция закрытия окна
   userId: string;
   file: { id: string };
 }

function ApproveDeleteFile({closeModal, userId, file}: IApproveDeleteFileProps) {
   const {handleDelete, isPending} = useDeleteFile(userId);

   return (
      <div className="approve__open">
         <div className="modal__overlay">
            <section className="approve__action">
               <div className="approve__inner">
                  <h2 className="approve__title">Удалить файл?</h2>
                  <div className="approve__btn">
                     <button type="button" className="approve__cancel" onClick={closeModal}>Отменить</button>
                     <button type="button" className="approve__delete" onClick={() => handleDelete(file.id)} disabled={isPending}>Удалить</button>
                  </div>
               </div>
            </section>
         </div>
      </div>
   )
}

export default ApproveDeleteFile;