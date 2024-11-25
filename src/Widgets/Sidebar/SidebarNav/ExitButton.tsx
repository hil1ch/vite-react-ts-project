import { useState } from 'react';
import './ExitButton.css';
import ApproveExit from '../../ApproveExit/ApproveExit';

function ExitButton() {

   const [isOpenExitModal, setIsOpenExitModal] = useState(false);

   const openExitModal = () => {
      setIsOpenExitModal(true);
    };

   return (
      <div className="sidebar__exit">
         <img src="src\images\exit.svg" alt="" className="sidebar__img"></img>
         <button type='button' className="sidebar__item-btn" onClick={openExitModal}>Выход</button>
         {isOpenExitModal && <ApproveExit />}
      </div>
   )
}

export default ExitButton;