import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/Article";

function App() {
  return (
        <Router>
            <Header/>
            <Switch>
                <Route path={'/posts/:articlename'} component={ArticlePage} />
                <Route path={'/'} component={HomePage} />
            </Switch>
        </Router>
  );
}

export default App;
