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
      </div>
)};

export default Login;