import './ShareModal.css';

function ShareModal() {
   return (
      <div className="share__open hidden">
         <div className="modal__overlay">
            <section className="share__action">
               <div className="share__inner">
                  <div className="share__header">
                     <h2 className="share__title">Поделиться</h2>
                     <div className="share__input">
                        <input type="checkbox"></input>
                        <p className="share__status">Чтение для всех</p>
                     </div>
                  </div>
                  <div className="share__btn">
                     <button type="reset" className="share__cancel">Отменить</button>
                     <button type="button" className="share__save">Сохранить</button>
                  </div>
               </div>
            </section>
         </div>
      </div>
   )
}

export default ShareModal;