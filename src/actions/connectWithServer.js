export const connectWithServer = () => dispatch => {
  dispatch(
   {type: 'IS_CONNECT', payload: true},
  );
};