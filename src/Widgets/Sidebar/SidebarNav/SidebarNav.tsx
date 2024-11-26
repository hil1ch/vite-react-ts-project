import { useModal } from '../../../Features/hooks/useModal';
import MyNotes from './MyNotesLink';
import NewFileButton from './NewFileButton';
import NewNoteButton from './NewNoteButton';
import OpenFiles from './OpenFilesLink';
import OpenNotes from './OpenNotesLink';
import MyFiles from './MyFilesLink';
import CreateFile from '../../CreateFile/CreateFile';
import './SidebarNav.css';

function SidebarNav() {

   const { isOpenModal, openModal, closeModal } = useModal();

   return (
      <div className="sidebar__nav">
         <p className='sidebar__common'>Общее хранилище</p>
         <OpenNotes />
         <OpenFiles />
         <NewNoteButton />
         <NewFileButton onClick={openModal}/>
         <p className="sidebar__own">Личное хранилище</p>
         <MyNotes />
         <MyFiles />
         {isOpenModal && <CreateFile closeModal={closeModal}/>}
      </div>
   )
}

export default SidebarNav;