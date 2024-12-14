import { useState, useEffect, useRef } from "react";
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
  selectedTag: string; // Пропс для выбранного тега
}

function OpenFiles({ selectedTag }: OpenFilesTagProps) {
  const [data, setData] = useState<File[]>([]);
  const prevTag = useRef<string | null>(null); // Храним предыдущее значение тега

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url =
          selectedTag === "Все"
            ? "https://39085646937f8a29.mokky.dev/files"
            : `https://39085646937f8a29.mokky.dev/files?tag=${selectedTag}`;

        const response = await fetch(url);
        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || "Something went wrong");
        }

        setData(result);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Error fetching:", error.message);
        } else {
          console.error("Unknown error:", error);
        }
      }
    };

    if (prevTag.current !== selectedTag) { // Проверка на изменение тега
      prevTag.current = selectedTag;
      fetchData();
    }
  }, [selectedTag]);

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
