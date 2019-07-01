const initialState = {
  shots: [{x: null, y: null}],
  opponentsShots: []
};

const shotReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOT_IN_FIELD':
      return {
        ...state,
        shots: [
          ...state.shots,
          action.payload
        ]
      };
    case "FETCH_OPPONENTS_SHOTS_SUCCESS":
      return {...state, opponentsShots: action.payload};
    default:
      return state
  }
};

export default shotReducer