import './Header.css';

function Header() {
   return (
      <div className="container">
         <div className="header">
            <img className="logo" src="src\images\start-logo.png"></img>
            <nav className="nav">
               <ul className="nav__list">
                  <li className="nav__item-login"><a href="#" className="nav__link-login">Войти</a></li>
                  <li className="nav__item-signup"><a href="#" className="nav__link-signup">Зарегистрироваться</a></li>
               </ul>
            </nav>
         </div>
      </div>
)}

export default Header;