import './ShareModal.css';

function ShareModal() {
   return (
                  <div className="share__header">
                     <div className="share__input">
                        <input type="checkbox" name='isOpen'></input>
                        <p className="share__status">Чтение для всех</p>
                     </div>
                  </div>
   )
}

export default ShareModal;