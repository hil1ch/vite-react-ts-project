import './EmailInputPage.css';

function EmailInputPage() {
   return (
      <div className="registration">
         <img src="src\images\logo.jpg" alt="Logo"></img>
         <h2 className="registration__title">Регистрация</h2>
         <form className="form" action="" method="post">
            <input type="email" placeholder="Адрес электронной почты" required></input>
            <button type="submit" className="registration__btn">Продолжить</button>
         </form>
      </div>
   )
}

export default EmailInputPage;