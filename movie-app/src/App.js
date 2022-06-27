import React from "react"
import './App.css';
import MainPage from "./Component/main-index";
import {
  Routes,
  Route,
} from "react-router-dom";
import NavBar from "./Component/NavBar";


function App() {
  return (
    <div className="contener">
      <NavBar />

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
