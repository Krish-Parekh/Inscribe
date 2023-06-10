import "./App.css";
import Landing from "./pages/Landing/Landing";
import Notes from "./pages/Notes/Notes";
import AddNote from "./pages/Notes/AddNotes";
import Note from "./pages/Notes/Note";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/add-note" element={<AddNote />} />
        <Route path="/note/:id" element={<Note />} />
      </Routes>
    </Router>
  );
}

export default App;
