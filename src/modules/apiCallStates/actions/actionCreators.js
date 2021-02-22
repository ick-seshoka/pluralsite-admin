import * as actions from "./actionTypes";

export const setCallInProgress = () => ({
  type: actions.SET_CALL_IN_PROGRESS,
});

export const setCallCompleted = () => ({
  type: actions.SET_CALL_COMPLETED,
});

export const setCallFailed = () => ({
  type: actions.SET_CALL_FAILED,
});
