import './CloseFileBtn.css';

interface ICloseFileBtnProps {
   closeModal: () => void;
 }

function CloseFileBtn({closeModal}: ICloseFileBtnProps) {
   return (
      <div className="close__file-btn">
         <button className="close__file-creating" onClick={closeModal}>
            <img src="src\images\close-file-creating.svg" alt="" className="close__file-creating__img"></img>
         </button>
      </div>
   )
}

export default CloseFileBtn;