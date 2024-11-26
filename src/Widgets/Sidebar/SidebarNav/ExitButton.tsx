import './ExitButton.css';

interface IExitButtonProps {
   openExitModal: () => void;
 }

function ExitButton({openExitModal}: IExitButtonProps) {

   return (
      <div className="sidebar__exit">
         <img src="src\images\exit.svg" alt="" className="sidebar__img"></img>
         <button type='button' className="sidebar__item-btn" onClick={openExitModal}>Выход</button>
      </div>
   )
}

export default ExitButton;