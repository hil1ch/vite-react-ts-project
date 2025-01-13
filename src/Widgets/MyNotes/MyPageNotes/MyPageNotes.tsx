import { useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import "./MyPageNotes.css";
import PlaceholderImage from "../../../Shared/UI/PlaceholderNotePageImage/PlaceholderNotePageImage";
import MainPageNote from "../../../Entities/MainPageNote/MainPageNote";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDeleteNote } from "../../../Features/hooks/useDeleteNote";
import Note from '../../Note/Note';

interface MyNote {
  id?: string;
  userId: string;
  title: string,
  text: string,
  email: string;
  tag: string
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
  const { handleDelete, isPending } = useDeleteNote();
  const [selectedNote, setSelectedNote] = useState<MyNote | null>(null); 
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const reversedNotes = [...data].reverse();

  // Функция для открытия модального окна с заметкой
  const handleNoteClick = (note: MyNote) => {
    setSelectedNote(note);
    setIsModalOpen(true);
  };

  // Функция для закрытия модального окна
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedNote(null);
  };

  return (
    <div className="my__page-notes">
      <ToastContainer autoClose={2000}/>
      <div className="my__notes-title__inner">
        <h3 className="my__notes-title">Мои заметки</h3>
      </div>
      <p className="my__notes-description">Заметки, созданные мной</p>
      <div className="my__page-notes-list">
      {reversedNotes.length > 0 ? (
          reversedNotes.map((item, index) => (
            <MainPageNote
              key={index}
              {...item}
              onDelete={handleDelete}
              isPending={isPending}
              onClick={() => handleNoteClick(item)}
            />
          ))
        ) : (
          <PlaceholderImage />
        )}
      </div>

      {/* Модальное окно с выбранной заметкой */}
      {isModalOpen && selectedNote && (
        <Note closeModal={closeModal} note={selectedNote} />
      )}
    </div>
  );
}

export default MyPageNotes;