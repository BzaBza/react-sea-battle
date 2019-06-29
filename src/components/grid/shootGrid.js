import React, {Component} from 'react';
import Cell from "./cell";

class ShootGrid extends Component {
  render() {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
     <div style={style.main}>
       <div style={{marginTop: "calc(3em + 2px)", width: "calc(100% / 11)"}}>
         {numbers.map((number) =>
          <div style={style.cell}>{number}</div>
         )}
       </div>
       <div style={{width: "calc(100% - 100% / 11 + 1px)"}}>
         <div style={{display: "flex"}}>
           {numbers.map((number) =>
            <div style={style.cell}>{number}</div>
           )}
         </div>
         {numbers.map((number1) =>
          <div style={style.row}>
            <div style={{display: "flex"}}>
              {numbers.map((number) =>
               <div style={style.cell} >

               </div>
              )}
            </div>
          </div>
         )}
       </div>
     </div>
    );
  }
}

const style = {
  main: {
    border: "1px solid black",
    display: "flex",
    width: "calc(45% - 2px)"
  },
  row: {
    width: "100%",
    height: "calc(100% / 11)",
  },
  cell: {
    border: "1px solid black",
    width: "100%",
    height: "3em",
  },
};

export default ShootGrid;
