import OpenFilesComponents from '../../Widgets/OpenFilesComponents/OpenFilesComponents';
import Sidebar from '../../Widgets/Sidebar/Sidebar';
import './OpenFilesPage.css';

function OpenFilesPage() {
   return (
      <div className='open__files-page'>
         <Sidebar />
         <OpenFilesComponents />
      </div>
   )
}

export default OpenFilesPage;