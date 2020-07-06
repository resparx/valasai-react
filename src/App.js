import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/Article";

function App() {
  const customHistory = createBrowserHistory();
  
  return (
        <Router  history={customHistory}>
            <Header/>
            <Switch>
                <Route path={'/posts/:articlename'} component={ArticlePage} />
                <Route path={'/'} component={HomePage} />
            </Switch>
        </Router>
  );
}

export default App;
