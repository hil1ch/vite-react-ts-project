import { useQuery } from "@tanstack/react-query";
import { useDeleteFile } from "../../../Features/hooks/useDeleteFile";
import PlaceholderFilePageImage from "../../../Shared/UI/PlaceholderFilePageImage/PlaceholderFilePageImage";
import "./MyPageFiles.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FileDto {
  id: string;
  url: string;
}

const fetchMyFiles = async (): Promise<FileDto[]> => {
  const response = await fetch('https://39085646937f8a29.mokky.dev/uploads');
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }

  return data;
};

function MyPageFiles() {
  const {handleDelete, isPending} = useDeleteFile();

  const { data = [], error, isLoading } = useQuery<FileDto[], Error>({
    queryKey: ['uploads'],
    queryFn: fetchMyFiles,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="my__page-files">
      <ToastContainer autoClose={2000}/>
      <div className="my__files-title__inner">
        <h3 className="my__files-title">Мои файлы</h3>
      </div>
      <p className="my__files-description">Файлы, загруженные мной</p>
      <div className="my__page-files__list">
      {data.length > 0 ? (
          data.map((file) => (
            <div className="file__item" key={file.id}>
              <img src="src\images\file-main-page.svg" alt="" />
              <a href={file.url} target="_blank" rel="noopener noreferrer">
                {file.id}
              </a>
              <button className='delete__file' onClick={() => handleDelete(file.id)} disabled={isPending}>
                <img src='src\images\delete.svg'></img>
              </button>
            </div>
          ))
        ) : (
          <PlaceholderFilePageImage />
        )}
      </div>
    </div>
  );
}

export default MyPageFiles;
