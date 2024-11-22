import SearchInput from "../../Shared/SearchInput/SearchInput";
import MainPageNotes from "./MainPageNotes/MainPageNotes";
import "./MainPageComponents.css";
import MainPageFiles from "./MainPageFiles/MainPageFiles";

function MainPageComponents() {
  return (
    <div className="main">
      <div className="main__page-inner">
        <SearchInput />
        <MainPageNotes />
        <MainPageFiles />
      </div>
    </div>
  );
}

export default MainPageComponents;
