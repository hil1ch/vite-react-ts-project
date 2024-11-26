import './ExitButton.css';

interface IExitButtonProps {
   openModal: () => void;
 }

function ExitButton({openModal}: IExitButtonProps) {

   return (
      <div className="sidebar__exit">
         <img src="src\images\exit.svg" alt="" className="sidebar__img"></img>
         <button type='button' className="sidebar__item-btn" onClick={openModal}>Выход</button>
      </div>
   )
}

export default ExitButton;