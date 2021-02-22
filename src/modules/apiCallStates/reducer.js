import * as actions from "./actions/actionTypes";

const initialState = {
  callsInProgress: 0,
};

function apiCallStateReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_CALL_IN_PROGRESS:
      return { ...state, callsInProgress: state.callsInProgress + 1 };

    case actions.SET_CALL_COMPLETED:
    case actions.SET_CALL_FAILED:
      return { ...state, callsInProgress: state.callsInProgress - 1 };

    default:
      return state;
  }
}

export default apiCallStateReducer;
