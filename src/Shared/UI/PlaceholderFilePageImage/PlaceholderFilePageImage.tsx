import './PlaceholderFilePageImage.css';
import placeholderImage from '../../../images/Searching-Looking.svg';

function PlaceholderFilePageImage() {
   return (
      <div className="placeholder">
         <img 
            src={placeholderImage} 
            alt="Нет файлов" 
            className="placeholder__image" 
         />
         <p className="no__files">Файлов пока нет</p>
      </div>
   )
}

export default PlaceholderFilePageImage;