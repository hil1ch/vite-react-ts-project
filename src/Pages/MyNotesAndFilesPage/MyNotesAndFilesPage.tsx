import Sidebar from '../../Widgets/Sidebar/Sidebar';
import MyNotesAndFiles from '../../Widgets/MyNotesAndFiles/MyNotesAndFiles';
import './MyNotesAndFilesPage.css';

function MyNotesAndFilesPage() {
   return (
      <div className='my__notes-files__page'>
         <Sidebar />
         <MyNotesAndFiles />
      </div>
   )
}

export default MyNotesAndFilesPage;