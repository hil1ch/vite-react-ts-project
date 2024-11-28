import'./ShareButton.css';

interface IShareButtonProps {
   openModal: (type: string) => void;
 }

function ShareButton({openModal}: IShareButtonProps) {
   return (
      <div className='note__share'>
         <div className="note__share-inner">
            <div className="note__share-btn">
               <button type="button" className="note__share-button" onClick={() => openModal('share')}>
                  <img src="src\images\share.svg" alt="" className="note__share-img"></img>
                  <p className="note__text-btn">Поделиться</p>
               </button>
            </div>
         </div>
      </div>
   )
}

export default ShareButton;