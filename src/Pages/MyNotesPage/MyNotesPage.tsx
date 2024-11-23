import MyNotes from '../../Widgets/MyNotes/MyNotes';
import Sidebar from '../../Widgets/Sidebar/Sidebar';
import './MyNotesPage.css';

function MyNotesPage() {
   return (
      <div className='my__notes-page'>
         <Sidebar />
         <MyNotes />
      </div>
   )
}

export default MyNotesPage;