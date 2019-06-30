const initialState = {
  shots: [],
};

const shotReducer = (state = initialState, action) => {
  if (action.type === 'SHOT_IN_FIELD') {
    return {
      ...state,
      // shots: state.shots.push(action.payload),
    };
  } else {
    return state
  }
};

export default shotReducer