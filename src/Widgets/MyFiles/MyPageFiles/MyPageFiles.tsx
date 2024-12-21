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

const fetchMyFiles = async (): Promise<MyFile[]> => {
  const url = "http://localhost:5182/api/Document/GetUserDocuments";

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
    queryKey: ["myFiles"],
    queryFn: fetchMyFiles,
  });

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  const filteredMyFiles =
    selectedTag === "Все"
      ? data
      : data.filter((note) => note.documentNoteTags.includes(selectedTag));

  return (
    <div className="my__page-files">
      <div className="my__files-title__inner">
        <h3 className="my__files-title">Мои файлы</h3>
      </div>
      <div className="my__page-files__list">
      {filteredMyFiles.length > 0 ? (
          filteredMyFiles.map((item, index) => (
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
