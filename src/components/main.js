import React, {Component} from 'react';
import GridContainer from "./grid/container";
import SetShips from "./ships/shipsRender";
import ShotGrid from "./grid/shotGrid";

class Main extends Component {
  render() {
    return (
     <div style={{display: "flex", justifyContent: "space-between"}}>
       <GridContainer/>
       <SetShips/>
       <ShotGrid/>
     </div>
    );
  }
}

export default Main;
