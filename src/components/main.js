import React from 'react';
import GridContainer from "./grid/container";
import SetShips from "./ships/shipsRender";
import ShootGrid from "./grid/shootGrid";

function Main() {
  return (
     <div style={{display: "flex", justifyContent: "space-between"}}>
       <GridContainer/>
       <SetShips/>
       <ShootGrid/>
     </div>
  );
}

export default Main;
