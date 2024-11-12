import './Header.css';

function Header() {
   return <div className="header container">
      <img className="logo" src=""></img>
      <nav className="nav">
         <ul className="nav__list">
            <li className="nav__item"><a href="#" className="nav__link">Войти</a></li>
            <li className="nav__item"><a href="#" className="nav__link">Зарегистрироваться</a></li>
         </ul>
      </nav>
   </div>
}

export default Header;