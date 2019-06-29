const initialState = {
  ships: [],
};

const setShipReducer = (state = initialState, action) => {

  if (action.type === "SET_SHIPS") {
    return {
      ...state,
      ships: action.payload.ships,
    };
  } else {
    return state
  }
};

export default setShipReducer