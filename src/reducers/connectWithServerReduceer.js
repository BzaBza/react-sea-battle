const initialState = {
  isConnect: false,
};

const isConnectReducer = (state = initialState, action) => {

  switch (action.type) {
    case "IS_CONNECT":
      return {...state, isConnect: action.data};
    default:
      return state
  }
};

export default isConnectReducer