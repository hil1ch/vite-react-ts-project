import { useState } from "react";
import SearchInput from "../../Shared/UI/SearchInput/SearchInput";
import OpenFiles from "./MainPageFiles/OpenFiles";
import "./OpenFilesComponents.css";

function OpenFilesComponents() {

  const [selectedTag, setSelectedTag] = useState<string>('Все');

  const handleTagChange = (tag: string) => {
    setSelectedTag(tag);
  };

  return (
    <div className="main">
      <div className="main__page-inner">
        <SearchInput onTagChange={handleTagChange}/>
        <OpenFiles selectedTag={selectedTag}/>
      </div>
    </div>
  );
}

export default OpenFilesComponents;
