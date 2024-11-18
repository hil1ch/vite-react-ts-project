import './CloseFileBtn.css';

function CloseFileBtn() {
   return (
      <div className="close__file-btn">
         <button className="close__file-creating">
            <img src="src\images\close-file-creating.svg" alt="" className="close__file-creating__img"></img>
         </button>
      </div>
   )
}

export default CloseFileBtn;