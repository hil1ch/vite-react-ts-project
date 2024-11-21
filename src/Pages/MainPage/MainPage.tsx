import './MainPage.css';
import Sidebar from "../../Widgets/Sidebar/Sidebar";
import MainPageComponents from "../../Widgets/MainPageComponents/MainPageComponents";

function MainPage() {
   return (
      <div className='main__page'>
         <Sidebar />
         <MainPageComponents />
      </div>
   )
}

export default MainPage;