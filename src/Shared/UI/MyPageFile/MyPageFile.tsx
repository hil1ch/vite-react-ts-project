import './MyPageFile.css';

function MyPageFile() {
   return (
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
   )
}

export default MyPageFile;