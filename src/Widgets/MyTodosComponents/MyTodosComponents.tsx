import { useState } from 'react';
import SearchInput from "../../Shared/UI/SearchInput/SearchInput";
import MyTodos from './MyTodos/MyTodos';
import './MyTodosComponents.css';

function MyTodosComponents() {
  const [selectedTag, setSelectedTag] = useState<string>("Все");

  const handleTagChange = (tag: string) => {
    setSelectedTag(tag);
  };

  return (
    <div className="main">
      <div className="main__page-inner">
        <SearchInput onTagChange={handleTagChange} />
        <MyTodos selectedTag={selectedTag} />
      </div>
    </div>
  );
}

export default MyTodosComponents;
