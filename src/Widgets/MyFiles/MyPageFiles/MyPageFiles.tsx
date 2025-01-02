import { useQuery } from "@tanstack/react-query";
import PlaceholderFilePageImage from "../../../Shared/UI/PlaceholderFilePageImage/PlaceholderFilePageImage";
import "./MyPageFiles.css";
import MainPageFile from "../../../Entities/MainPageFile/MainPageFile";

interface Author {
  email: string;
  password: string;
  activatedEmail: boolean;
  registryCode: number;
  gAcoount: boolean;
  id: string;
}

interface MyFile {
  description: string;
  title: string;
  documentNoteTags: string[];
  author: Author;
}

interface MyFilesTagProps {
  selectedTag: string;
}

const fetchMyFiles = async (selectedTag: string): Promise<MyFile[]> => {
  const url =
    selectedTag === "Все"
      ? "http://localhost:5182/api/Document/GetUserDocuments"
      : `http://localhost:5182/api/Document/UserDocumentsByTags?tagNames=${selectedTag}`;

  const response = await fetch(url);
  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Something went wrong");
  }

  return result;
};

function MyPageFiles({ selectedTag }: MyFilesTagProps) {
  const {
    data = [],
    error,
    isLoading,
  } = useQuery<MyFile[], Error>({
    queryKey: ["myFiles", selectedTag],
    queryFn: () => fetchMyFiles(selectedTag),
  });

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="my__page-files">
      <div className="my__files-title__inner">
        <h3 className="my__files-title">Мои файлы</h3>
      </div>
      <div className="my__page-files__list">
      {data.length > 0 ? (
          data.map((item, index) => (
            <MainPageFile key={index} {...item} />
          ))
        ) : (
          <PlaceholderFilePageImage />
        )}
      </div>
    </div>
  );
}

export default MyPageFiles;
