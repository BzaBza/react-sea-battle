export const shot = (field) => dispatch => {
  dispatch(
   {type: 'SHOT_IN_FIELD', payload: field}
  );
};
export const fetchOpponentsShots = (field) => dispatch => {
  dispatch(
   {type: 'FETCH_OPPONENTS_SHOTS_SUCCESS', payload: field}
  );
};
