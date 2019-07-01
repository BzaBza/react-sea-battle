import React, {Component} from 'react';
import {db} from "../../base";

class ShotGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0
    };
    this.shot = this.shot.bind(this);
  }

  shot(x, y) {
    console.log(this.props.opponentsShots, "this.props.opponentsShots")
    if (this.props.opponentsShots === undefined) return
    let ships = this.props.field.map((item) => {
      return {x: item.x, y: item.y}
    });

    let opponentsShots = ships.some((item) =>
     this.props.opponentsShots.length > 0 && item.x === this.props.opponentsShots[this.props.opponentsShots.length - 1].x
     && item.y === this.props.opponentsShots[this.props.opponentsShots.length - 1].y
    );

    let myShots = this.props.opponentsField.some((item) =>
     item.x === this.props.shots[this.props.shots.length - 1].x &&
     item.y === this.props.shots[this.props.shots.length - 1].y
    );

    console.log(myShots, "myShotsmyShotsmyShots");

    if (this.props.opponentsShots.length === 0 && this.props.shots.length === 1) {
      console.log("NA$ALO")
      onShot(this.props)
      return;
      // if( this.props.shots.length === 1) {
      //   onShot(this.props)
      // }
    }
    if (myShots) {
      console.log("myShots");
      onShot(this.props)
      return;
    }
    if (this.props.opponentsShots.length > 0 && !opponentsShots) {
      console.log("opponents shots");
      onShot(this.props)
      return;
    }
    // else if(this.props.shots.length > 1 && myShots) {
    //   onShot(this.props)
    // }else if (this.props.opponentsShots && !opponentsShots) {
    //   onShot(this.props)
    // }else onShot(this.props);


    function onShot(props) {
      let shots = props.shots;
      if (!shots.some(e => e.x === x && e.y === y)) {
        props.onShot({x: x, y: y})
      }
      db.ref(`session/open`).once('value', (snapshot) => {
        let currentGameId = Object.keys(snapshot.val())[0];
        db.ref(`session/open/${currentGameId}/users/${props.userRef}/shots`).push().set({x: x, y: y});
      });

      // let data = [];
      // let ships = [];
      //
      // for (let i = 0; i <= this.props.opponentsField.length; i++) {
      //   if (this.props.opponentsField[i] !== undefined) {
      //     ships.push({x: this.props.opponentsField[i].x, y: this.props.opponentsField[i].y});
      //   }
      //   // console.log(ships, "ships")
      //
      //   // data.push(shots.filter(elem => elem === ships[i]));
      // }
      // data.push(ships);
      // // if(data === this.props.opponentsField){
      // //   console.log(shots,"data",this.props.opponentsField,"this.props.opponentsField", "YES")
      // // }else{
      // //   console.log(shots,"data",this.props.opponentsField,"this.props.opponentsField", "NO")
      // // }
    }

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
               <div aria-disabled={true} style={style.cell} onClick={() => {
                 this.shot(number1, number)
               }}>
                 <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                   {
                     this.props.opponentsField.map((ship) => ship.x === number1 && ship.y === number ?
                      this.props.shots.map((shot) =>
                       shot.x === number1 && shot.y === number ? <div>SH</div> : null
                      )
                      : null)
                   }
                   {
                     this.props.shots.map((shot) =>
                      shot.x === number1 && shot.y === number ? <div>[X]</div> : null
                     )
                   }
                 </div>
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
