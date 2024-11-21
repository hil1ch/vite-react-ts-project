import './MainPageComponents.css';

function MainPageComponents() {
   return ( 
      <div className="main">
         <div className='main__page-inner'>
            <input type="search" placeholder='Поиск по тегу' className='search__input'/>
            <div className='main__page-notes'>
               <div className="open__notes-title__inner">
                  <h3 className="open__notes-title">Открытые заметки</h3>
                  <a href="#" className="open__notes-link">Смотреть все</a>
               </div>
               <p className="open__notes-description">Заметки, созданные другими пользователями</p>
               <div className="main__page-notes-list">
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
               </div>
            </div>
            <div className="main__page-files">
               <div className="open__files-title__inner">
                  <h3 className="open__files-title">Файлы</h3>
                  <a href="#" className="open__files-link">Смотреть все</a>
               </div>
               <div className="main__page-files__list">
                  <div className="main__page-file">
                     <div className="main__page-file__inner">
                        <img src="src\images\file-main-page.svg" alt="" />
                        <div className="file__inner-text">
                           <h4 className="file__inner-title">Название</h4>
                           <p className="file__inner-description">Описание</p>
                        </div>
                        <div className="file__inner-username">
                           <img src="src\images\note-user.svg" alt="" />
                           <span className="file__user-email">Email пользователя</span>
                        </div>
                        <div className="file__tag-inner">
                           <img src="src\images\note-tag.svg" alt="" />
                           <span className="file__tag-name">Тег</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default MainPageComponents;