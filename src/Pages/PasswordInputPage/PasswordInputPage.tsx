import './PasswordInputPage.css';

function PasswordInputPage() {
   return (
      <div className="registration">
         <img src="src\images\logo.jpg" alt="Logo"></img>
         <h2 className="registration__title">Регистрация</h2>
         <form className="form" action="" method="post">
            <input type="password" placeholder="Пароль" required></input>
            <input type="password" placeholder="Подтвердите пароль" required></input>
            <button type="submit" className="registration__btn">Зарегистрироваться</button>
         </form>
      </div>
   )
}

export default PasswordInputPage;