import './ExitButton.css';

interface IExitButtonProps {
   openModal: (type: string) => void;
 }

function ExitButton({openModal}: IExitButtonProps) {

   return (
      <div className="sidebar__exit">
         <img src="src\images\exit.svg" alt="" className="sidebar__img"></img>
         <button type='button' className="sidebar__item-btn" onClick={() => openModal('exit')}>Выход</button>
      </div>
   )
}

export default ExitButton;