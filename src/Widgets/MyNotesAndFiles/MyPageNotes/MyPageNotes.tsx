import MyPageNote from '../../../Shared/MyPageNote/MyPageNote';
import './MyPageNotes.css';

function MyPageNotes() {
   return (
      <div className='my__page-notes'>
         <div className="my__notes-title__inner">
            <h3 className="my__notes-title">Мои заметки</h3>
            <a href="#" className="my__notes-link">Смотреть все</a>
         </div>
         <p className="my__notes-description">Заметки, созданные мной</p>
         <div className="my__page-notes-list">
            <MyPageNote />
         </div>
      </div>
   )
}

export default MyPageNotes;