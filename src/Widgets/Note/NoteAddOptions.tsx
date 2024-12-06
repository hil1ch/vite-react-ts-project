import { useState, useRef } from 'react';
import './NoteAddOptions.css';
import FileItem from '../../Shared/UI/FileItem/FileItem';

function NoteAddOptions() {

   const [selectedFile, setSelectedFile] = useState<File | null>(null);
   const fileInputRef = useRef<HTMLInputElement | null>(null);

   const handleFileItemChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0] || null;
      setSelectedFile(file);
   };

   const handleDeleteFileItem = () => {
      setSelectedFile(null);
      if (fileInputRef.current) {
         fileInputRef.current.value = '';
      }
   };

   return (
      <div className='options__display'>
         <div className="note__add-options">
            <div className="add__file">
               <div className="add__file-inner">
                  <img src="src\images\add-file.svg" alt="" className="add__file-img"></img>
                  <input 
                  type="file" 
                  className="add__file-input"
                  onChange={handleFileItemChange}
                  ref={fileInputRef}
                  ></input>
               </div>
               {selectedFile && (
                  <FileItem 
                     fileName={selectedFile.name} 
                     fileUrl={URL.createObjectURL(selectedFile)} 
                     onDelete={handleDeleteFileItem}  
                  />
               )}
            </div>
         </div>
         <div className="add__tag">
            <img src="src\images\add-tag.svg" alt="" className="add__tag-img"></img>
            <form className='tag__form'>
               <label className="tag__title" htmlFor="tags">Выберите тег:</label>
               <select className="tags__list" id="tags" name="tags" required>
                  <option value="Учеба">Учеба</option>
                  <option value="Кулинария">Кулинария</option>
                  <option value="Здоровье">Здоровье</option>
                  <option value="Спорт">Спорт</option>
                  <option value="Цели">Цели</option>
                  <option value="Цели">Разработка</option>
                  <option value="Цели">Дизайн</option>
               </select>
            </form>
         </div>
      </div>
   )
}

export default NoteAddOptions;