export const setShips = (field) => dispatch => {
  dispatch(
   {type: 'SET_SHIPS', payload: {field}}
  );
};
export const fetchUserRef = (ref) => dispatch => {
  dispatch(
   {type: 'FETCH_USER_REF', payload: ref}
  );
};
export const startGame = (shipsCells) => dispatch => {
  dispatch(
   {type: "FETCH_OPPONENTS_DATA", payload: shipsCells},
  )
};
export const gamesFlag = (shipsCells) => dispatch => {
  dispatch(
   {type: "GAMES_FLAG", payload: shipsCells},
  )
};