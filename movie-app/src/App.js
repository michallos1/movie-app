import React from "react"
import './App.css';
import MainPage from "./Component/main-index";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <div>
    <nav className="Nav-bar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/pogoda-info">Movies</Link></li>
        <li><Link to="/pogoda-info">Series</Link></li>
      </ul>
    </nav>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>

  );
}

function NotFound() {
  return (
    <div>
      <h1>Not found!</h1>
      <p>Sorry your page was not found!</p>
    </div>
  );
}

export default App;
