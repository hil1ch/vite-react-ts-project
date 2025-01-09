import Sidebar from "../../Widgets/Sidebar/Sidebar";
import MyTodosComponents from "../../Widgets/MyTodosComponents/MyTodosComponents";
import './MyTodosPage.css'

function MyTodosPage() {
   return (
      <div className='my__todos-page'>
         <Sidebar />
         <MyTodosComponents />
      </div>
   )
}

export default MyTodosPage;