import { useState, useRef } from 'react';
import './CreateAddFile.css';
import FileItem from '../../Shared/UI/FileItem/FileItem';

function CreateAddFile() {

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
      <div className="create__add-file">
         <div className="create__add-file__inner">
            <img src="src\images\add-file.svg" alt="" className="create__add-file__img"></img>
            <input 
            type="file" 
            name='file'
            className="add__file-input"
            onChange={handleFileItemChange}
            ref={fileInputRef}
            required
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
   )
}

export default CreateAddFile;