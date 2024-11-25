import { Outlet } from "react-router-dom";
import Sidebar from "../Widgets/Sidebar/Sidebar";

function MainLayout() {
   return (
      <div>
         <Sidebar />
         <Outlet></Outlet>
      </div>
   )
}

export default MainLayout;