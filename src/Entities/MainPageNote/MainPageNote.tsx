import './MainPageNote.css';

interface IMainPageNoteProps {
   description: string;
   title: string;
   author: {
      email: string;
   };
   noteTags: {
      noteId: string;
      tag: {
         name: string;
      };
   }[];
}

function MainPageNote({description, title, author, noteTags}: IMainPageNoteProps) {
   return (
      <div className="main__page-note">
         <div className="main__page-note__inner">
            <p className="note__inner-description">{description}</p>
            <h4 className="note__inner-title">{title}</h4>
            <div className='note__inner-username'>
               <div className="username__inner">
                  <img src="src\images\note-user.svg" alt="" />
                  <span className="note__user-email">{author?.email}</span>
               </div>
               <div className="note__tag-inner">
                  <img src="src\images\note-tag.svg" alt="" />
                  <span className="note__tag-name">
                     {noteTags?.map((tagItem) => (
                        <span key={tagItem.noteId} className="file__tag-name">
                           {tagItem.tag.name}
                        </span>
                     ))}
                  </span>
               </div>
            </div>
         </div>
      </div>
   )
}

export default MainPageNote;