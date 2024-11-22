import './MainPageFile.css';

function MainPageFile() {
   return (
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
   )
}

export default MainPageFile;