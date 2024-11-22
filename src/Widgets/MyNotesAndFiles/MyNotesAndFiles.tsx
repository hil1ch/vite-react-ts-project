import './MyNotesAndFiles.css';

function MyNotesAndFiles() {
   return ( 
      <div className="my__page">
         <div className='my__page-inner'>
            <input type="search" placeholder='Поиск по тегу' className='search__input'/>
            <div className='my__page-notes'>
               <div className="my__notes-title__inner">
                  <h3 className="my__notes-title">Мои заметки</h3>
                  <a href="#" className="my__notes-link">Смотреть все</a>
               </div>
               <p className="my__notes-description">Заметки, созданные мной</p>
               <div className="my__page-notes-list">
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
               </div>
            </div>
            <div className="my__page-files">
               <div className="my__files-title__inner">
                  <h3 className="my__files-title">Мои файлы</h3>
                  <a href="#" className="my__files-link">Смотреть все</a>
               </div>
               <div className="my__page-files__list">
                  <div className="my__page-file">
                     <div className="my__page-file__inner">
                        <img src="src\images\file-main-page.svg" alt="" />
                        <div className="my__file-inner__text">
                           <h4 className="my__file-inner__title">Название</h4>
                           <p className="my__file-inner__description">Описание</p>
                        </div>
                        <div className="my__file-inner__username">
                           <img src="src\images\note-user.svg" alt="" />
                           <span className="my__file-user__email">Email пользователя</span>
                        </div>
                        <div className="my__file-tag__inner">
                           <img src="src\images\note-tag.svg" alt="" />
                           <span className="my__file-tag__name">Тег</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default MyNotesAndFiles;