import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage } from './pages/HomePage';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { Library } from './pages/Library.jsx';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/playlist" element={<Library />} />
        </Routes>
      </Router>
  );
}

export default App;
