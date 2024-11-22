import './MainPageNote.css';

function MainPageNote() {
   return (
      <div className="main__page-note">
         <div className="main__page-note__inner">
            <p className="note__inner-description">Первые несколько строк из заметки...</p>
            <h4 className="note__inner-title">Название</h4>
            <div className='note__inner-username'>
               <div className="username__inner">
                  <img src="src\images\note-user.svg" alt="" />
                  <span className="note__user-email">Email пользователя</span>
               </div>
               <div className="note__tag-inner">
                  <img src="src\images\note-tag.svg" alt="" />
                  <span className="note__tag-name">Тег</span>
               </div>
            </div>
         </div>
      </div>
   )
}

export default MainPageNote;