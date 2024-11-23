import SearchInput from "../../Shared/SearchInput/SearchInput";
import OpenFiles from "./MainPageFiles/OpenFiles";
import "./OpenFilesComponents.css";

function OpenFilesComponents() {
  return (
    <div className="main">
      <div className="main__page-inner">
        <SearchInput />
        <OpenFiles />
      </div>
    </div>
  );
}

export default OpenFilesComponents;