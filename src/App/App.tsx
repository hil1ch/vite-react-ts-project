import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyFilesPage from "../Pages/MyFilesPage/MyFilesPage";
import StartPage from "../Pages/StartPage/StartPage";
import Login from "../Pages/Login/Login";
import OpenFilesPage from "../Pages/OpenFilesPage/OpenFilesPage";
import MyNotesPage from "../Pages/MyNotesPage/MyNotesPage";
import OpenNotesPage from "../Pages/OpenNotesPage/OpenNotesPage";
import RegistrationPage from "../Pages/RegistrationPage/RegistrationPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<RegistrationPage />} />
        <Route path="openNotes" element={<OpenNotesPage />} />
        <Route path="openFiles" element={<OpenFilesPage />} />
        <Route path="myNotes" element={<MyNotesPage />} />
        <Route path="myFiles" element={<MyFilesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
