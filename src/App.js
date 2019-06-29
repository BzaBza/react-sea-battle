import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from "react-router"
import Main from "./components/main";

const customHistory = createBrowserHistory();

function App() {
  return (
   <Router history={customHistory}>
    <div><Main/></div>
   </Router>
  );
}

export default App;
