import './MyPageNote.css';

function MyPageNote() {
   return (
      <div className="my__page-note">
         <div className="my__page-note__inner">
            <p className="my__note-inner__description">Первые несколько строк из заметки...</p>
            <h4 className="my__note-inner__title">Название</h4>
            <div className='my__note-inner__username'>
               <div className="my__note-username__inner">
                  <img src="src\images\note-user.svg" alt="" />
                  <span className="my__note-user__email">Email пользователя</span>
               </div>
               <div className="my__note-tag__inner">
                  <img src="src\images\note-tag.svg" alt="" />
                  <span className="my__note-tag__name">Тег</span>
               </div>
            </div>
         </div>
      </div>
   )
}

export default MyPageNote;