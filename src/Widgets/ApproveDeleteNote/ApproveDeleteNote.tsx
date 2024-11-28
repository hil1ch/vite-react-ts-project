import './ApproveDeleteNote.css';

interface IApproveDeleteNoteProps {
   closeModal: () => void; // Функция закрытия окна
 }

function ApproveDeleteNote({closeModal}: IApproveDeleteNoteProps) {
   return (
      <div className="approve__open">
         <div className="modal__overlay">
            <section className="approve__action">
               <div className="approve__inner">
                  <h2 className="approve__title">Удалить заметку?</h2>
                  <div className="approve__btn">
                     <button type="button" className="approve__cancel" onClick={closeModal}>Отменить</button>
                     <button type="button" className="approve__delete">Удалить</button>
                  </div>
               </div>
            </section>
         </div>
      </div>
   )
}

export default ApproveDeleteNote;