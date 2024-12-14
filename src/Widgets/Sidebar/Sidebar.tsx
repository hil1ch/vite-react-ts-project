import { useState, useEffect } from 'react';
import { useModal } from '../../Features/hooks/useModal';
import './Sidebar.css';
import ExitButton from './SidebarNav/ExitButton';
import SidebarNav from './SidebarNav/SidebarNav';
import ApproveExit from '../ApproveExit/ApproveExit';

function Sidebar() {
  const { isOpenModal, openModal, closeModal } = useModal();
  const [userEmail, setUserEmail] = useState<string | null>(null);

  // Получение email из localStorage при загрузке компонента
  useEffect(() => {
    const email = localStorage.getItem('userEmail');
    setUserEmail(email);
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        <img src="src/images/profile.svg" alt="" className="profile__img" />
        <p className="profile__name">{userEmail}</p>
      </div>
      <SidebarNav />
      <ExitButton openModal={openModal} />
      {isOpenModal && <ApproveExit closeModal={closeModal} />}
    </div>
  );
}

export default Sidebar;
