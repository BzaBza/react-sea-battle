const initialState = {
  field: [],
  opponentsField: [],
};

const setShipReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SHIPS":
      return {
        ...state,
        field: action.payload.field,
      };
    case "FETCH_OPPONENTS_DATA":
      return {...state, opponentsField: action.payload};
    default:
      return state
  }
};

export default setShipReducer