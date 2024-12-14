import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

interface LoginResponse {
  message?: string;
  token?: string;  // Добавление токена в ответ
}

function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("https://39085646937f8a29.mokky.dev/auth", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      const data: LoginResponse = await res.json();

      if (res.ok) {
        localStorage.setItem('userEmail', email);
        
        if (data.token) {
          localStorage.setItem('authToken', data.token);
        }

        navigate('/myNotes'); 
      } else {
        // Обработка ошибки с сервера
        setError('Неверный логин или пароль');
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(`Ошибка: ${error.message}`);
      } else {
        setError('Ошибка сети. Попробуйте позже.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <img className="logo" src="src/images/logo.jpg" alt="Logo" />
      <h2 className="login__title">Вход</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Адрес электронной почты"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <div className="error-message">{error}</div>}
        <button type="submit" className="login__btn" disabled={loading}>
          {loading ? 'Загрузка...' : 'Войти'}
        </button>
      </form>
      <Link to="/registration" className="no__account">Нет аккаунта?</Link>
    </div>
  );
}

export default Login;
