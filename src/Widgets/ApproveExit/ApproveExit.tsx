import { useNavigate } from 'react-router-dom';
import { queryClient } from '../../Shared/api/query-client';
import './ApproveExit.css';

interface IApproveExitProps {
  closeModal: () => void;
}

function ApproveExit({ closeModal }: IApproveExitProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    queryClient.removeQueries();
    localStorage.removeItem('userEmail');
    localStorage.removeItem('authToken');

    // Закрываем модальное окно
    closeModal();

    // Перенаправляем на страницу входа
    navigate('/');
  };

  return (
    <div className="approve__open">
      <div className="modal__overlay">
        <section className="approve__action">
          <div className="approve__inner">
            <h2 className="approve__title">Выйти из аккаунта?</h2>
            <div className="approve__btn">
              <button type="button" className="approve__cancel" onClick={closeModal}>
                Отменить
              </button>
              <button type="button" className="approve__exit" onClick={handleLogout}>
                Выход
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ApproveExit;
