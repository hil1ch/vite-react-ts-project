import { useState } from 'react';
import SearchInput from "../../Shared/UI/SearchInput/SearchInput";
import OpenNotes from "./MainPageNotes/OpenNotes";
import "./OpenNotesComponents.css";

function OpenNotesComponents() {
  const [selectedTag, setSelectedTag] = useState<string>("Все");

  const handleTagChange = (tag: string) => {
    setSelectedTag(tag);
  };

  return (
    <div className="main">
      <div className="main__page-inner">
        <SearchInput onTagChange={handleTagChange} />
        <OpenNotes selectedTag={selectedTag} />
      </div>
    </div>
  );
}

export default OpenNotesComponents;
