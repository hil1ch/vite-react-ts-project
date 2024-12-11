import { useState, useEffect } from "react";
import MainPageNote from "../../../Entities/MainPageNote/MainPageNote";
import "./OpenNotes.css";
import PlaceholderNotePageImage from "../../../Shared/UI/PlaceholderNotePageImage/PlaceholderNotePageImage";

interface Note {
  description: string;
  title: string;
  user: string;
  tag: string;
}

interface OpenNotesTagProps {
  selectedTag: string; // Пропс для выбранного тега
}

function OpenNotes({ selectedTag }: OpenNotesTagProps) {

  const [data, setData] = useState<Note[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = selectedTag === 'Все' 
          ? 'https://39085646937f8a29.mokky.dev/notes' 
          : `https://39085646937f8a29.mokky.dev/notes?tag=${selectedTag}`;

        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Something went wrong');
        }

        setData(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          // Типизация ошибки как экземпляра Error
          console.error('Error fetching:', error.message);
        } else {
          console.error('Unknown error:', error);
        }
      }
    };

    fetchData();
  }, [selectedTag]);

  return (
    <div className="main__page-notes">
      <div className="open__notes-title__inner">
        <h3 className="open__notes-title">Открытые заметки</h3>
      </div>
      <p className="open__notes-description">
        Заметки, созданные другими пользователями
      </p>
      <div className="main__page-notes__list">
        {data.length > 0 ? (
          data.map((item, index) => (
            <MainPageNote key={index} {...item} />
          ))
        ) : (
          <PlaceholderNotePageImage />
        )}
      </div>
    </div>
  );
}

export default OpenNotes;
