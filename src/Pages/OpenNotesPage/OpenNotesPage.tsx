import './OpenNotesPage.css';
import Sidebar from '../../Widgets/Sidebar/Sidebar';
import OpenNotesComponents from '../../Widgets/OpenNotesComponents/OpenNotesComponents';

function OpenNotesPage() {
   return (
      <div className='open__notes-page'>
         <Sidebar />
         <OpenNotesComponents />
      </div>
   )
}

export default OpenNotesPage;