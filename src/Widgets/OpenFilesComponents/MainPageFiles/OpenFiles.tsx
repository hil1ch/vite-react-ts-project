import { useQuery } from '@tanstack/react-query';
import MainPageFile from "../../../Entities/MainPageFile/MainPageFile";
import "./OpenFiles.css";
import PlaceholderFilePageImage from "../../../Shared/UI/PlaceholderFilePageImage/PlaceholderFilePageImage";

interface File {
  description: string;
  title: string;
  tag: string;
  user: string;
}

interface OpenFilesTagProps {
  selectedTag: string;
}

const fetchFiles = async (selectedTag: string): Promise<File[]> => {
  const url =
    selectedTag === "Все"
      ? "https://39085646937f8a29.mokky.dev/files"
      : `https://39085646937f8a29.mokky.dev/files?tag=${selectedTag}`;

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
    queryKey: ['files', selectedTag],
    queryFn: () => fetchFiles(selectedTag),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="main__page-files">
      <div className="open__files-title__inner">
        <h3 className="open__files-title">Файлы</h3>
      </div>
      <div className="main__page-files__list">
        {data.length > 0 ? (
          data.map((item, index) => <MainPageFile key={index} {...item} />)
        ) : (
          <PlaceholderFilePageImage />
        )}
      </div>
    </div>
  );
}

export default OpenFiles;
