import React, {Component} from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from "react-router"
import Main from "./components/main";
import { db } from './base'

const customHistory = createBrowserHistory();

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      songs: { }
    };
  }
  componentWillMount() {
    // var citiesRef = db.collection("cities");
    //
    // citiesRef.doc("SF").set({
    //   name: "San Francisco", state: "CA", country: "USA",
    //   capital: false, population: 860000,
    //   regions: ["west_coast", "norcal"] });
    // citiesRef.doc("LA").set({
    //   name: "Los Angeles", state: "CA", country: "USA",
    //   capital: false, population: 3900000,
    //   regions: ["west_coast", "socal"] });
    // citiesRef.doc("DC").set({
    //   name: "Washington, D.C.", state: null, country: "USA",
    //   capital: true, population: 680000,
    //   regions: ["east_coast"] });
    // citiesRef.doc("TOK").set({
    //   name: "Tokyo", state: null, country: "Japan",
    //   capital: true, population: 9000000,
    //   regions: ["kanto", "honshu"] });
    // citiesRef.doc("BJ").set({
    //   name: "Beijing", state: null, country: "China",
    //   capital: true, population: 21500000,
    //   regions: ["jingjinji", "hebei"] });

    // this.sessionRef = base.syncState('session');
  }
  componentWillUnmount() {
    // base.removeBinding(this.sessionRef)
  }

  render() {
    return (
     <Router history={customHistory}>
       <div><Main/></div>
     </Router>
    );
  }
}

export default App;
