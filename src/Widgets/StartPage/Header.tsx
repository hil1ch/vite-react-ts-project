import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
   return (
      <div className="container">
         <div className="header">
            <img className="logo" src="src\images\start-logo.png"></img>
            <nav className="nav">
               <ul className="nav__list">
                  <li className="nav__item-login"><Link to="/login" className="nav__link-login">Войти</Link></li>
                  <li className="nav__item-signup"><Link to="/registration" className="nav__link-signup">Зарегистрироваться</Link></li>
               </ul>
            </nav>
         </div>
      </div>
)}

export default Header;