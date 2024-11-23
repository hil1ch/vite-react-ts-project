import './MyFilesPage.css';
import Sidebar from '../../Widgets/Sidebar/Sidebar';
import MyFiles from '../../Widgets/MyFiles/MyPageFiles/MyFiles';

function MyFilesPage() {
   return (
      <div className='my__files-page'>
         <Sidebar />
         <MyFiles />
      </div>
   )
}

export default MyFilesPage;