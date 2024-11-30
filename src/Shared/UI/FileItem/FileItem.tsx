import './FileItem.css';

interface IFileItemProps {
   fileName: string;
   fileUrl: string;
   onDelete: () => void;
}

function FileItem({ fileName, fileUrl, onDelete }: IFileItemProps) {

   const cutFileName = (name: string, maxLength: number) => {
      return name.length > maxLength ? `${name.slice(0, maxLength)}...` : name;
   };

   return (
      <div className="file__link">
         <a href={fileUrl} target="_blank" className="file__open-link">{cutFileName(fileName, 15)}</a>
         <button type="button" className="file__delete-button" onClick={onDelete}>
            <img className="file__delete-img" src="src\images\close-file.svg" alt=""></img>
         </button>
      </div>
   )
}

export default FileItem;