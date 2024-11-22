import SearchInput from '../../Shared/SearchInput/SearchInput';
import MyPageNotes from './MyPageNotes/MyPageNotes';
import './MyNotesAndFiles.css';
import MyPageFiles from './MyPageFiles/MyPageFiles';

function MyNotesAndFiles() {
   return ( 
      <div className="my__page">
         <div className='my__page-inner'>
            <SearchInput />
            <MyPageNotes />
            <MyPageFiles />
         </div>
      </div>
   )
}

export default MyNotesAndFiles;