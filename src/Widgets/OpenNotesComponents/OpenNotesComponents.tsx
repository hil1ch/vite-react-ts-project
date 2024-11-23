import SearchInput from "../../Shared/SearchInput/SearchInput";
import OpenNotes from "./MainPageNotes/OpenNotes";
import "./OpenNotesComponents.css";

function OpenNotesComponents() {
  return (
    <div className="main">
      <div className="main__page-inner">
        <SearchInput />
        <OpenNotes />
      </div>
    </div>
  );
}

export default OpenNotesComponents;
