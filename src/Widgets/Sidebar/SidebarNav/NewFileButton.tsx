import './NewFileButton.css';

interface INewFileButtonProps {
   onClick: () => void;
 }

function NewFileButton({onClick}: INewFileButtonProps) {
   return (
   <div className="sidebar__btn">
      <button className="sidebar__btn-file" onClick={onClick}>
         <img src="src\images\new-file.svg" alt="" className="sidebar__img"></img>
         <p className="sidebar__text-btn">Новый файл</p>
      </button>
   </div>
)}

export default NewFileButton;