import "./MyFiles.css";
import MyPageFiles from "./MyPageFiles";
import UploadFile from "../../UploadFile/UploadFile";

function MyFiles() {

  return (
    <div className="my__page">
      <div className="my__page-inner">
        <UploadFile />
        <MyPageFiles/>
      </div>
    </div>
  );
}

export default MyFiles;
