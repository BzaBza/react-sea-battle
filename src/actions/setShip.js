import { db } from "../base";

export const setShips = (ships) => dispatch => {
  dispatch(
   {type: 'SET_SHIPS', payload: {ships}}
  );
  setShipsInDb(ships);
};


function setShipsInDb(grid) {
  let messageListRef = db.ref('session');
  let newMessageRef = messageListRef.push();
  let postId = newMessageRef.key;
  console.log(postId, "posID!!!!!!!!!!!")
  let ships = [];
  for (let i = 0; i < grid.length; i++) {
   for(let z = 0; z < grid[i].length; z++) {
     if (grid[i][z].state === "ship") {
        ships.push(grid[i][z])
     }
   }
  }
  newMessageRef.set({ships: ships});
}