import './ApproveDeleteNote.css';

function ApproveDeleteNote() {
   return (
      <div className="approve__open">
         <div className="modal__overlay">
            <section className="approve__action">
               <div className="approve__inner">
                  <h2 className="approve__title">Удалить заметку?</h2>
                  <div className="approve__btn">
                     <button type="button" className="approve__cancel">Отменить</button>
                     <button type="button" className="approve__delete">Удалить</button>
                  </div>
               </div>
            </section>
         </div>
      </div>
   )
}

export default ApproveDeleteNote;