import React from 'react';
import { Route, Routes } from "react-router";
import './App.css';
import Favorites from './Components/Favorites/Favorites';
import Movie from './Components/Movie/Movie';
import Home from './Components/Home/Home';


function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/favs" element={<Favorites/>} />
          <Route path="/movie/:id" element={<Movie/>} />
    </Routes>
    </div>
  );
}

export default App;
