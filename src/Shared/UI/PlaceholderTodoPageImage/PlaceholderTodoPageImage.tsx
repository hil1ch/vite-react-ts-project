import placeholderImage from '../../../images/Searching-Looking.svg';
import './PlaceholderTodoPageImage.css';

function PlaceholderTodoPageImage() {
   return (
      <div className="placeholder">
         <img 
            src={placeholderImage} 
            alt="Нет задач" 
            className="placeholder__image" 
         />
         <p className="no__todos">Задач пока нет</p>
      </div>
   )
}

export default PlaceholderTodoPageImage;