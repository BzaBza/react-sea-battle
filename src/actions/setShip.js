export const setShips = (ships) => dispatch => {
  dispatch(
   {type: 'SET_SHIPS', payload: {ships}}
  );
};

// export const setSingleDeckShip = () => dispatch => {
//   dispatch(
//    {type: 'SET_SINGLE_DECKS_SHIP'}
//   );
// };
//
// export const setDoubleDeckShip = () => dispatch => {
//   dispatch(
//    {type: 'SET_DOUBLE_DECK_SHIP'}
//   );
// };
//
// export const setThreeDeckShip = () => dispatch => {
//   dispatch(
//    {type: 'SET_THREE_DECK_SHIP'}
//   );
// };
//
// export const setFourDeckShip = () => dispatch => {
//   dispatch(
//    {type: 'SET_FOUR_DECK_SHIP'}
//   );
// };