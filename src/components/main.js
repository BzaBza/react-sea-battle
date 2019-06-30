import React, {Component} from 'react';
import GridContainer from "./grid/container";
import SetShipsContainer from "./ships/container";
import ShotGridContainer from "./shotGrid/container";
import StartGameContainer from "./start/container";

class Main extends Component {
  render() {
    return (
     <div style={{display: "flex", justifyContent: "space-between"}}>
       <GridContainer/>
       <SetShipsContainer/>
       <StartGameContainer/>
       <ShotGridContainer/>
     </div>
    );
  }
}

export default Main;
