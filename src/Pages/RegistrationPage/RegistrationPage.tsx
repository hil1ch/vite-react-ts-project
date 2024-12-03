import { Link } from 'react-router-dom';
import './RegistrationPage.css';

function RegistrationPage() {
   return (
      <div className="registration">
         <img src="src\images\logo.jpg" alt="Logo"></img>
         <h2 className="registration__title">Регистрация</h2>
         <form className="form" action="" method="post">
            <input type="email" placeholder="Адрес электронной почты" required></input>
            <input type="password" placeholder="Пароль" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Должен содержать по крайней мере одну цифру, по одной заглавной и строчной букве и не менее 8 или более символов" required></input>
            <input type="password" placeholder="Подтвердите пароль" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Должен содержать по крайней мере одну цифру, по одной заглавной и строчной букве и не менее 8 или более символов" required></input>
            <button type="submit" className="registration__btn">Зарегистрироваться</button>
         </form>
         <Link to="/login" className="has__account">Уже есть аккаунт?</Link>
      </div>
   )
}

export default RegistrationPage;