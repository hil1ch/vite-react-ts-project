import './Login.css';

function Login() {
   return ( 
      <div className="login">
         <img className="logo" src="src\images\logo.jpg" alt="Logo"></img>
         <h2 className="login__title">Вход</h2>
         <form className="form" action="" method="post">
            <input type="email" placeholder="Адрес электронной почты" required></input>
            <input type="password" placeholder="Пароль" required></input>
            <button type="submit" className="login__btn">Войти</button>
         </form>
         <div className="line-or-line">
            <div className="line"></div>
            <span className="or-text">ИЛИ</span>
            <div className="line"></div>
         </div>
         <div className="login__google">
            <img className="login__img" src="src\images\Google.svg" alt="Google"></img>
            <a href="#" className="login__link">Продолжить с Google</a>
         </div>
      </div>
)};

export default Login;