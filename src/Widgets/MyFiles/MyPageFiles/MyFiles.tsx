import "./MyFiles.css";
import SearchInput from "../../../Shared/UI/SearchInput/SearchInput";
import MyPageFiles from "./MyPageFiles";

function MyFiles() {
  return (
    <div className="my__page">
      <div className="my__page-inner">
        <SearchInput />
        <MyPageFiles />
      </div>
    </div>
  );
}

export default MyFiles;
