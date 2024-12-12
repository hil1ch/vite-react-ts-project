import './MainPageFile.css';
interface IMainPageFileProps {
   title: string;
   description: string;
   user: string;
   tag: string;
}

function MainPageFile({title, description, user, tag}: IMainPageFileProps) {
   return (
      <div className="main__page-file">
         <div className="main__page-file__inner">
            <img src="src\images\file-main-page.svg" alt="" />
            <div className="file__inner-text">
               <h4 className="file__inner-title">{title}</h4>
               <p className="file__inner-description">{description}</p>
            </div>
            <div className="file__inner-username">
               <img src="src\images\note-user.svg" alt="" />
               <span className="file__user-email">{user}</span>
            </div>
            <div className="file__tag-inner">
               <img src="src\images\note-tag.svg" alt="" />
               <span className="file__tag-name">{tag}</span>
            </div>
         </div>
      </div>
   )
}

export default MainPageFile;