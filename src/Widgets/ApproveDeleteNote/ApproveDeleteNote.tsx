import { useDeleteNote } from '../../Features/hooks/useDeleteNote';
import './ApproveDeleteNote.css';

interface IApproveDeleteNoteProps {
   closeModal: () => void;
   userId: string;
   note: { id: string };
 }

function ApproveDeleteNote({closeModal, userId, note}: IApproveDeleteNoteProps) {
   const {handleDelete, isPending} = useDeleteNote(userId);

   return (
      <div className="approve__open">
         <div className="modal__overlay">
            <section className="approve__action">
               <div className="approve__inner">
                  <h2 className="approve__title">Удалить заметку?</h2>
                  <div className="approve__btn">
                     <button type="button" className="approve__cancel" onClick={closeModal}>Отменить</button>
                     <button type="button" className="approve__delete" onClick={() => handleDelete(note.id)} disabled={isPending}>Удалить</button>
                  </div>
               </div>
            </section>
         </div>
      </div>
   )
}

export default ApproveDeleteNote;