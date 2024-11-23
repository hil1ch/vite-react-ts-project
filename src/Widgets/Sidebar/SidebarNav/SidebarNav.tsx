import MyNotes from './MyNotesLink';
import NewFileButton from './NewFileButton';
import NewNoteButton from './NewNoteButton';
import OpenFiles from './OpenFilesLink';
import OpenNotes from './OpenNotesLink';
import MyFiles from './MyFilesLink';
import './SidebarNav.css';

function SidebarNav() {
   return (
      <div className="sidebar__nav">
         <p className='sidebar__common'>Общее хранилище</p>
         <OpenNotes />
         <OpenFiles />
         <NewNoteButton />
         <NewFileButton />
         <p className="sidebar__own">Личное хранилище</p>
         <MyNotes />
         <MyFiles />
      </div>
   )
}

export default SidebarNav;