import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import UserNotesPage from "./pages/UserNotesPage/UserNotesPage";
import NewNotePage from "./pages/UserNotesPage/NewNotePage";
import NotesPage from "./pages/UserNotesPage/NotesPage";
import SettingsPage from "./pages/UserNotesPage/SettingsPage";
import UserPage from "./pages/UserNotesPage/UserPage";
import Sidebar from "./components/Sidebar/Sidebar";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
      </Routes>
      <Sidebar>
        <Routes>
          <Route path="/notes/new" element={<NewNotePage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Sidebar>
    </Router>
  );
}

export default App;
