import { useModal } from '../../../Features/hooks/useModal';
import MyNotes from './MyNotesLink';
import NewFileButton from './NewFileButton';
import NewNoteButton from './NewNoteButton';
import OpenFiles from './OpenFilesLink';
import OpenNotes from './OpenNotesLink';
import MyFiles from './MyFilesLink';
import Note from '../../Note/Note';
import CreateFile from '../../CreateFile/CreateFile';
import MyTodosLink from './MyTodosLink';
import './SidebarNav.css';

function SidebarNav() {

   const { isOpenModal, openModal, closeModal } = useModal();

   return (
      <div className="sidebar__nav">
         <p className='sidebar__common'>Общее хранилище</p>
         <OpenNotes />
         <OpenFiles />
         <NewNoteButton onClick={() => openModal('note')}/>
         <NewFileButton onClick={() => openModal('file')}/>
         <p className="sidebar__own">Личное хранилище</p>
         <MyTodosLink />
         <MyNotes />
         <MyFiles />
         {isOpenModal === 'note' && <Note closeModal={closeModal} />}
         {isOpenModal === 'file' && <CreateFile closeModal={closeModal} />}
      </div>
   )
}

export default SidebarNav;