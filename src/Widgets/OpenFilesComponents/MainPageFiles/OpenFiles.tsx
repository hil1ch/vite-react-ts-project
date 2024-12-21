import { useQuery } from '@tanstack/react-query';
import MainPageFile from "../../../Entities/MainPageFile/MainPageFile";
import "./OpenFiles.css";
import PlaceholderFilePageImage from "../../../Shared/UI/PlaceholderFilePageImage/PlaceholderFilePageImage";

interface Author {
  email: string;
  password: string;
  activatedEmail: boolean;
  registryCode: number;
  gAcoount: boolean;
  id: string;
}

interface File {
  description: string;
  title: string;
  documentNoteTags: string[];
  author: Author;
}

interface OpenFilesTagProps {
  selectedTag: string;
}

const fetchFiles = async (): Promise<File[]> => {
  const url = "http://localhost:5182/api/Document/GetAllOpenDocuments"

  const response = await fetch(url);
  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Something went wrong");
  }

  return result;
};

function OpenFiles({ selectedTag }: OpenFilesTagProps) {
  const {
    data = [],
    error,
    isLoading,
  } = useQuery<File[], Error>({
    queryKey: ['files'],
    queryFn: fetchFiles,
  });

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  const filteredFiles = selectedTag === "Все"
    ? data
    : data.filter(note => note.documentNoteTags.includes(selectedTag));

  return (
    <div className="main__page-files">
      <div className="open__files-title__inner">
        <h3 className="open__files-title">Файлы</h3>
      </div>
      <div className="main__page-files__list">
      {filteredFiles.length > 0 ? (
          filteredFiles.map((item, index) => (
            <MainPageFile key={index} {...item} />
          ))
        ) : (
          <PlaceholderFilePageImage />
        )}
      </div>
    </div>
  );
}

export default OpenFiles;
