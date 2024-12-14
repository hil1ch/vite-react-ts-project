import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './RegistrationPage.css';

interface RegisterResponse {
  message?: string;
  success?: boolean;
  token?: string;
}

function RegistrationPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Проверка на совпадение паролей
    if (password !== confirmPassword) {
      setError('Пароли не совпадают');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await fetch("https://39085646937f8a29.mokky.dev/register", {
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

      const data: RegisterResponse = await res.json();

      if (res.ok) {
        localStorage.setItem('userEmail', email);

        if (data.token) {
          localStorage.setItem('authToken', data.token);
        }

        // Успешная регистрация, перенаправляем на страницу со своими заметками
        navigate('/myNotes');
      } else {
        // Обработка ошибки с сервера
        setError('Пользователь уже зарегистрирован');
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
    <div className="registration">
      <img src="src/images/logo.jpg" alt="Logo" />
      <h2 className="registration__title">Регистрация</h2>
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
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Должен содержать по крайней мере одну цифру, по одной заглавной и строчной букве и не менее 8 или более символов"
          required
        />
        <input
          type="password"
          placeholder="Подтвердите пароль"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Должен содержать по крайней мере одну цифру, по одной заглавной и строчной букве и не менее 8 или более символов"
          required
        />
        {error && <div className="error-message">{error}</div>}
        <button type="submit" className="registration__btn" disabled={loading}>
          {loading ? 'Загрузка...' : 'Зарегистрироваться'}
        </button>
      </form>
      <Link to="/login" className="has__account">Уже есть аккаунт?</Link>
    </div>
  );
}

export default RegistrationPage;
