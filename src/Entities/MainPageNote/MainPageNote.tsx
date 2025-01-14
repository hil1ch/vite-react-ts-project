import './MainPageNote.css';

interface IMainPageNoteProps {
  id?: string;
  userId: string;
  title: string;
  text: string;
  email: string;
  tag: string;
  isPending: boolean;
  onClick: () => void;
  onDeleteClick: () => void;
}

function MainPageNote({ text, title, userId, tag, isPending, onClick, onDeleteClick }: IMainPageNoteProps) {
  return (
    <div className="main__page-note" onClick={onClick}>
      <div className="main__page-note__inner">
        <div className='text-and-delete'>
          <p className="note__inner-description">{text}</p>
          <button
            className='delete__note'
            disabled={isPending}
            onClick={(e) => {
              e.stopPropagation(); 
              onDeleteClick(); 
            }}
          >
            <img src='src\images\delete.svg' alt="Delete" />
          </button>
        </div>
        <h4 className="note__inner-title">{title}</h4>
        <div className='note__inner-username'>
          <div className="username__inner">
            <img src="src\images\note-user.svg" alt="" />
            <span className="note__user-email">{userId}</span>
          </div>
          <div className="note__tag-inner">
            <img src="src\images\note-tag.svg" alt="" />
            <span className="note__tag-name">{tag}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
 
 export default MainPageNote;