import React from 'react';
import {Route, Routes, Link} from "react-router-dom";



import Home from "./route/Home";
import Intro from './route/Intro/Intro';
import Thumbnail from './route/Thumbnail/Thumbnail';

function App() {
  return(
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Intro" element={<Intro/>} />
        <Route path="/Thumbnail" element={<Thumbnail/>}/>
        
      </Routes>
      <Link to="/Thumbnail"> Thumbnail Maker </Link>
      <Link to="/Intro">Introduce my self</Link>
    </div>
)
}

export default App;
