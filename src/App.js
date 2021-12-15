import React, {Component} from 'react';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';

import Home from "./route/Home";
import Intro from "./route/Intro";

function App() {
  return (
    <Router>
            <Routes>
                <RouteLayout
                    exact
                    path = "/"
                    layout = {DefaultLayout}
                    component = {withRouter(Home)} />
                    
                <RouteLayout
                    exact
                    path = "/Intro"
                    layout = {DefaultLayout}
                    component = {withRouter(Intro)} />
            </Routes>
        </Router>
  );
}

export default App;
