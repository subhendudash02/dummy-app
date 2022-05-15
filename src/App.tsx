import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import NewPage from "./components/NewPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/NewPage" element={ <NewPage/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
