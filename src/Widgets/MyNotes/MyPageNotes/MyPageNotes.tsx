import { useQuery } from "@tanstack/react-query";
import "./MyPageNotes.css";
import PlaceholderImage from "../../../Shared/UI/PlaceholderNotePageImage/PlaceholderNotePageImage";
import MainPageNote from "../../../Entities/MainPageNote/MainPageNote";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface MyNote {
  description: string;
  title: string;
  user: string;
  noteTags: string[];
}

interface MyNotesTagProps {
  selectedTag: string;
}

const fetchMyNotes = async (selectedTag: string, token: string | null): Promise<MyNote[]> => {
  const url =
    selectedTag === "Все"
      ? "https://39085646937f8a29.mokky.dev/myNotes"
      : `https://39085646937f8a29.mokky.dev/myNotes?tag=${selectedTag}`;

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

function MyPageNotes({ selectedTag }: MyNotesTagProps) {
  const token = localStorage.getItem('authToken');

  const {
      data = [],
      error,
      isLoading,
    } = useQuery<MyNote[], Error>({
      queryKey: ['myNotes', selectedTag],
      queryFn: () => fetchMyNotes(selectedTag, token),
    });
  
    if (isLoading) {
      return <div>Загрузка...</div>;
    }
  
    if (error instanceof Error) {
      return <div>Error: {error.message}</div>;
    } 

  return (
    <div className="my__page-notes">
      <ToastContainer />
      <div className="my__notes-title__inner">
        <h3 className="my__notes-title">Мои заметки</h3>
      </div>
      <p className="my__notes-description">Заметки, созданные мной</p>
      <div className="my__page-notes-list">
      {data.length > 0 ? (
          data.map((item, index) => (
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
