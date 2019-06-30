export const shot = (field) => dispatch => {
  dispatch(
   {type: 'SHOT_IN_FIELD', payload: field}
  );
};
