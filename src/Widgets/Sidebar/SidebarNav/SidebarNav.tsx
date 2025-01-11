import { useModal } from '../../../Features/hooks/useModal';
import MyNotes from './MyNotesLink';
import NewNoteButton from './NewNoteButton';
import MyFiles from './MyFilesLink';
import Note from '../../Note/Note';

import MyTodosLink from './MyTodosLink';
import './SidebarNav.css';

function SidebarNav() {

   const { isOpenModal, openModal, closeModal } = useModal();

   return (
      <div className="sidebar__nav">
         <NewNoteButton onClick={() => openModal('note')}/>
         <p className="sidebar__own">Личное хранилище</p>
         <MyTodosLink />
         <MyNotes />
         <MyFiles />
         {isOpenModal === 'note' && <Note closeModal={closeModal} />}
      </div>
   )
}

export default SidebarNav;