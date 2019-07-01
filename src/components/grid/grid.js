import React, {Component} from 'react';

class Grid extends Component {
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
               <div style={style.cell}>
                 {
                   this.props.field.map((ship) => ship.x === number1 && ship.y === number ?
                    <div style={{width: "100%", backgroundColor: "#000", display: "flex", justifyContent: "center"}}>
                      {this.props.opponentsShots.map((ship) => ship.x === number1 && ship.y === number ?
                       <p style={{color: "#fff"}}>X</p> : null)}
                    </div> : null)}

                 {
                   this.props.opponentsShots.map((ship) => ship.x === number1 && ship.y === number ?
                    <div style={{position: "absolute"}}>*</div> : null)
                 }
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
    display: "flex",
    justifyContent: "center"
  },
};

export default Grid;
