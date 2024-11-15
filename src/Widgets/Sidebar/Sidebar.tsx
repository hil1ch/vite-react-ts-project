import './Sidebar.css';
import ExitButton from './SidebarNav/ExitButton';
import SidebarNav from './SidebarNav/SidebarNav';

function Sidebar() {
   return (
      <div className="sidebar">
         <div className="sidebar__profile">
            <img src="src\images\profile.svg" alt="" className="profile__img"></img>
            <p className="profile__name">Email пользователя</p>
         </div>
         <SidebarNav />
         <ExitButton />
      </div>
)};

export default Sidebar;