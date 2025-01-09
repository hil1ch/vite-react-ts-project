import { useQuery } from "@tanstack/react-query";
import PlaceholderFilePageImage from "../../../Shared/UI/PlaceholderFilePageImage/PlaceholderFilePageImage";
import "./MyPageFiles.css";
import MainPageFile from "../../../Entities/MainPageFile/MainPageFile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface MyFile {
  description: string;
  title: string;
  documentNoteTags: string[];
  user: string;
}

interface MyFilesTagProps {
  selectedTag: string;
}

const fetchMyFiles = async (selectedTag: string, token: string | null): Promise<MyFile[]> => {
  const url =
    selectedTag === "Все"
      ? "https://39085646937f8a29.mokky.dev/myFiles"
      : `https://39085646937f8a29.mokky.dev/myFiles?tag=${selectedTag}`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}` ,
    },
  });
  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Something went wrong");
  }

  return result;
};

function MyPageFiles({ selectedTag }: MyFilesTagProps) {
  const token = localStorage.getItem('authToken');

  const {
    data = [],
    error,
    isLoading,
  } = useQuery<MyFile[], Error>({
    queryKey: ["myFiles", selectedTag],
    queryFn: () => fetchMyFiles(selectedTag, token),
  });

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="my__page-files">
      <ToastContainer />
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
