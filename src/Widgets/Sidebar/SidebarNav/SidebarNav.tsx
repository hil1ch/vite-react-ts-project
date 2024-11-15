import MainButton from './MainButton';
import NewFileButton from './NewFileButton';
import NewNoteButton from './NewNoteButton';
import NotesAndFilesButton from './NotesAndFilesButton';
import './SidebarNav.css';

function SidebarNav() {
   return (
      <div className="sidebar__nav">
         <MainButton />
         <NewNoteButton />
         <NewFileButton />
         <NotesAndFilesButton />
      </div>
   )
}

export default SidebarNav;