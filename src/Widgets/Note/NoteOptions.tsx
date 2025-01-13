import NoteActions from './NoteActions';
import NoteAddOptions from './NoteAddOptions';
import './NoteOptions.css';

interface INoteOptionsProps {
   isNoteCreated: boolean;
   note?: {
     title: string;
     text: string;
     tag: string;
   }; 
}

function NoteOptions({note, isNoteCreated}: INoteOptionsProps) {
   return (
      <div className="note__options">
         <NoteAddOptions note={note} />
         <NoteActions isNoteCreated={isNoteCreated}/>
      </div>
   )
}

export default NoteOptions;