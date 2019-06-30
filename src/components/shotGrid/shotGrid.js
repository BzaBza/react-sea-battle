import React, {Component} from 'react';

class ShotGrid extends Component {
  constructor(props) {
    super(props);
    this.shot = this.shot.bind(this);
  }
  shot(row, cell){
    this.props.onShot({row: row, cell: cell})
    console.log(this.props.shots)
  }
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
               <div style={style.cell} onClick={()=>{this.shot(number1, number)}}>
                 {/*{this.props.opponentsField ? this.props.opponentsField.map((ship)=> ship.x === number1 && ship.y === number ?*/}
                 {/* this.props.shots.map((shot)=>*/}
                 {/*   shot.row === number1 && shot.cell === number ? <p>X</p> : null*/}
                 {/* )*/}
                 {/* : null): null}*/}
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

export default ShotGrid;
