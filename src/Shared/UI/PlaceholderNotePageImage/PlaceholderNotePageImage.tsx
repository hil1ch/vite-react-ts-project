import './PlaceholderNotePageImage.css';
import placeholderImage from '../../../images/Searching-Looking.svg';

function PlaceholderNotePageImage() {
   return (
      <div className="placeholder">
         <img 
            src={placeholderImage} 
            alt="Нет заметок" 
            className="placeholder__image" 
         />
         <p className="no__notes">Заметок пока нет</p>
      </div>
   )
}

export default PlaceholderNotePageImage;