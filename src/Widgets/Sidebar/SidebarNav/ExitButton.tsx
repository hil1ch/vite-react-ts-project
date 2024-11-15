import './ExitButton.css';

function ExitButton() {
   return (
   <div className="sidebar__exit">
      <img src="src\images\exit.svg" alt="" className="sidebar__img"></img>
      <a className="sidebar__item-link" href="#">Выход</a>
   </div>
)}

export default ExitButton;