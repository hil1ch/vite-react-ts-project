import SearchInput from "../../Shared/UI/SearchInput/SearchInput";
import MyPageNotes from "./MyPageNotes/MyPageNotes";
import "./MyNotes.css";

function MyNotes() {
  return (
    <div className="my__page">
      <div className="my__page-inner">
        <SearchInput />
        <MyPageNotes />
      </div>
    </div>
  );
}

export default MyNotes;
