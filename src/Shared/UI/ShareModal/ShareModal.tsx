import './ShareModal.css';

interface IShareModalProps {
   closeModal: () => void; // Функция закрытия модального окна
 }

function ShareModal({closeModal}: IShareModalProps) {
   return (
      <div className="share__open">
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
                     <button type="reset" className="share__cancel" onClick={closeModal}>Отменить</button>
                     <button type="button" className="share__save">Сохранить</button>
                  </div>
               </div>
            </section>
         </div>
      </div>
   )
}

export default ShareModal;