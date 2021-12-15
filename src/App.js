import React from 'react';
import {Route, Routes} from "react-router-dom";



import Home from "./route/Home";
import Intro from "./route/Intro";

function App() {
  return(
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Intro" component={<Intro/>} />
      </Routes>
      
    </div>
)
}

export default App;
