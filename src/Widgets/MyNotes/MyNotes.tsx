import { useState } from "react";
import SearchInput from "../../Shared/UI/SearchInput/SearchInput";
import MyPageNotes from "./MyPageNotes/MyPageNotes";
import "./MyNotes.css";

function MyNotes() {
  const [selectedTag, setSelectedTag] = useState<string>("Все");
  
    const handleTagChange = (tag: string) => {
      setSelectedTag(tag);
    };

  return (
    <div className="my__page">
      <div className="my__page-inner">
        <SearchInput onTagChange={handleTagChange}/>
        <MyPageNotes selectedTag={selectedTag}/>
      </div>
    </div>
  );
}

export default MyNotes;
