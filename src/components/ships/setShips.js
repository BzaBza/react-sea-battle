import React, {Component} from 'react';

class SetShips extends Component {
  constructor(props) {
    super(props);
    this.createShips = this.createShips.bind(this);
  }
createShips(){
  function random (max, min = 0) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function shuffle(array) {
    let counter = array.length;

    while (counter > 0) {
      let index = random(counter);

      counter--;

      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }

    return array;
  }

   const CELL_STATE = {
    MISS: 'miss',
    HIT: 'hit',
    SHIP: 'ship',
    EMPTY: 'empty'
  };

  const ORIENTATION = {
    HORIZONTAL: 0,
    VERTICAL: 1
  };

  function isShipAround(field, x, y) {
    const minX = Math.max(x - 1, 0);
    const minY = Math.max(y - 1, 0);
    const maxX = Math.min(x + 1, field.length - 1);
    const maxY = Math.min(y + 1, field[0].length - 1);
    return field[x][y].ship !== -1 || field[minX][y].ship !== -1 || field[x][minY].ship !== -1
     || field[maxX][y].ship !== -1 || field[x][maxY].ship !== -1;
  }

  function getPlaces(field, size) {
    const places = [];
    for (let x = 0; x < field.length; x++) {
      for (let y = 0; y < field[x].length; y++) {
        // For X axis
        if (x + size < field.length) {
          let i = x;
          for (; i < x + size; i++) {
            if (isShipAround(field, i, y)) {
              break;
            }
            if (i === x + size - 1) {
              places.push([x, y, ORIENTATION.HORIZONTAL]);
            }
          }
        }

        // For Y axis
        if (y + size < field[x].length) {
          let j = y;
          for (; j < y + size; j++) {
            if (isShipAround(field, x, j)) {
              break;
            }
            if (j === y + size - 1) {
              places.push([x, y, ORIENTATION.VERTICAL])
            }
          }
        }
      }
    }
    return places;
  }

  function placeTo(field, ship, [x, y, orientation]) {
    if (orientation === ORIENTATION.HORIZONTAL) {
      for (let i = x; i < x + ship.size; i++) {
        field[i][y].ship = ship.index;
        field[i][y].state = CELL_STATE.SHIP;
      }
    }
    if (orientation === ORIENTATION.VERTICAL) {
      for (let j = y; j < y + ship.size; j++) {
        field[x][j].ship = ship.index;
        field[x][j].state = CELL_STATE.SHIP;
      }
    }
  }

  function createCell({ x, y, state = CELL_STATE.EMPTY, ship = -1 } = {}) {
    return { state, x, y, ship }
  }

  function createField() {
    let size = 10;
    const field = new Array(size);
    for (let i = 0; i < size; i++) {
      field[i] = new Array(size);
      for (let j = 0; j < size; j++) {
        field[i][j] = createCell({ x: i, y: j});
      }
    }

    return field;
  }

  function fillRandom(field, shipsToCreate) {
    let ships = [];
    for (const ship of shipsToCreate) {
      const index = ships.length;
      const places = getPlaces(field, ship.size);
      if (places.length) {
        const placeIndex = random(places.length);
        const newShip = {
          index: index,
          life: ship.size,
          ...ship
        };
        placeTo(field, newShip, shuffle(places)[placeIndex]);
        ships.push(newShip);
      } else {
        console.warn('Can not find any place for ship', ship, 'no much space!');
      }
    }
    return { ships, field };
  }

  const ships = [
    { size: 5},
    { size: 4},
    { size: 3},
    { size: 3},
    { size: 2},
    { size: 2},
    { size: 2},
  ];
  let field = fillRandom(createField(), ships).field;
  let shipsCells = [];
  for (let i = 0; i < field.length; i++) {
    for(let z = 0; z < field[i].length; z++) {
      if (field[i][z].state === "ship") {
        shipsCells.push(field[i][z])
      }
    }
  }
  console.log(shipsCells, "shipsCells")
  this.props.onSetShips(shipsCells)
}
  render() {
    return (
     <div style={{width: "10%"}}>
       <button disabled={this.props.flag} onClick={()=>{this.createShips()}} style={{width: "100%"}}>Set ships</button>
     </div>
    );
  }
}

export default SetShips;