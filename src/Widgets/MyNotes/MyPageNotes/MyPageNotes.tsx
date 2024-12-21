import { useQuery } from "@tanstack/react-query";
import "./MyPageNotes.css";
import PlaceholderImage from "../../../Shared/UI/PlaceholderNotePageImage/PlaceholderNotePageImage";
import MainPageNote from "../../../Entities/MainPageNote/MainPageNote";

interface Author {
  email: string;
  password: string;
  activatedEmail: boolean;
  registryCode: number;
  gAcoount: boolean;
  id: string;
}

interface MyNote {
  description: string;
  title: string;
  author: Author;
  noteTags: string[];
}

interface MyNotesTagProps {
  selectedTag: string;
}

const fetchMyNotes = async (): Promise<MyNote[]> => {
  const url = "http://localhost:5182/api/Note/GetAllNotesByUser";
  const response = await fetch(url);
  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Something went wrong");
  }

  return result;
};

function MyPageNotes({ selectedTag }: MyNotesTagProps) {
  const {
      data = [],
      error,
      isLoading,
    } = useQuery<MyNote[], Error>({
      queryKey: ['myNotes'],
      queryFn: fetchMyNotes,
    });
  
    if (isLoading) {
      return <div>Загрузка...</div>;
    }
  
    if (error instanceof Error) {
      return <div>Error: {error.message}</div>;
    }
  
    // Фильтруем заметки по тегу
    const filteredMyNotes = selectedTag === "Все"
      ? data
      : data.filter(note => note.noteTags.includes(selectedTag));

  return (
    <div className="my__page-notes">
      <div className="my__notes-title__inner">
        <h3 className="my__notes-title">Мои заметки</h3>
      </div>
      <p className="my__notes-description">Заметки, созданные мной</p>
      <div className="my__page-notes-list">
      {filteredMyNotes.length > 0 ? (
          filteredMyNotes.map((item, index) => (
            <MainPageNote key={index} {...item} />
          ))
        ) : (
          <PlaceholderImage />
        )}
      </div>
    </div>
  );
}

export default MyPageNotes;
