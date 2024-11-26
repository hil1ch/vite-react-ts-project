import { useModal } from '../../Features/hooks/useModal';
import './Sidebar.css';
import ExitButton from './SidebarNav/ExitButton';
import SidebarNav from './SidebarNav/SidebarNav';
import ApproveExit from '../ApproveExit/ApproveExit';

function Sidebar() {

   const { isOpenModal, openModal, closeModal } = useModal(); 

   return (
      <div className="sidebar">
         <div className="sidebar__profile">
            <img src="src\images\profile.svg" alt="" className="profile__img"></img>
            <p className="profile__name">Email пользователя</p>
         </div>
         <SidebarNav />
         <ExitButton openExitModal={openModal}/>
         {isOpenModal && <ApproveExit closeExitModal={closeModal} />}
      </div>
)};

export default Sidebar;