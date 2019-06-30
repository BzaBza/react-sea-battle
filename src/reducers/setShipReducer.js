const initialState = {
  field: [],
  opponentsField: [],
  userRef: null,
  flag: false,
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
    case "FETCH_USER_REF":
      return {...state, userRef: action.payload};
    case "GAMES_FLAG":
      return {...state, flag: action.payload};
    default:
      return state
  }
};

export default setShipReducer