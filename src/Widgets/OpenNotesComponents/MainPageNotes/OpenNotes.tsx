import { useQuery } from '@tanstack/react-query';
import MainPageNote from "../../../Entities/MainPageNote/MainPageNote";
import "./OpenNotes.css";
import PlaceholderNotePageImage from "../../../Shared/UI/PlaceholderNotePageImage/PlaceholderNotePageImage";

interface Author {
  email: string;
  password: string;
  activatedEmail: boolean;
  registryCode: number;
  gAcoount: boolean;
  id: string;
}

interface Note {
  description: string;
  title: string;
  author: Author;
  noteTags: string[];
}

interface OpenNotesTagProps {
  selectedTag: string;
}

const fetchNotes = async (): Promise<Note[]> => {
  const url = "http://localhost:5182/api/Note/GetOpenNotes";
  const response = await fetch(url);
  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Something went wrong");
  }

  return result;
};

function OpenNotes({ selectedTag }: OpenNotesTagProps) {
  const {
    data = [],
    error,
    isLoading,
  } = useQuery<Note[], Error>({
    queryKey: ['notes'],
    queryFn: fetchNotes,
  });

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  // Фильтруем заметки по тегу
  const filteredNotes = selectedTag === "Все"
    ? data
    : data.filter(note => note.noteTags.includes(selectedTag));

  return (
    <div className="main__page-notes">
      <div className="open__notes-title__inner">
        <h3 className="open__notes-title">Открытые заметки</h3>
      </div>
      <p className="open__notes-description">
        Заметки, созданные другими пользователями
      </p>
      <div className="main__page-notes__list">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((item, index) => (
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
