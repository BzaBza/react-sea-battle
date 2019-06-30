const initialState = {
  shots: [{x: null, y: null}],
};

const shotReducer = (state = initialState, action) => {
  if (action.type === 'SHOT_IN_FIELD') {
    return {
      ...state,
      shots: [
        ...state.shots,
        action.payload
      ]
    };
  } else {
    return state
  }
};

export default shotReducer