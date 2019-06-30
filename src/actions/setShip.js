export const setShips = (field) => dispatch => {
  dispatch(
   {type: 'SET_SHIPS', payload: {field}}
  );
};

export const startGame = (shipsCells) => dispatch => {
  dispatch(
   {type: "FETCH_OPPONENTS_DATA", payload: shipsCells},
  )
};