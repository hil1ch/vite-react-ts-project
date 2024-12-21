import { useState } from "react";
import "./MyFiles.css";
import SearchInput from "../../../Shared/UI/SearchInput/SearchInput";
import MyPageFiles from "./MyPageFiles";

function MyFiles() {
  const [selectedTag, setSelectedTag] = useState<string>('Все');
  
    const handleTagChange = (tag: string) => {
      setSelectedTag(tag);
    };

  return (
    <div className="my__page">
      <div className="my__page-inner">
        <SearchInput onTagChange={handleTagChange}/>
        <MyPageFiles selectedTag={selectedTag}/>
      </div>
    </div>
  );
}

export default MyFiles;
