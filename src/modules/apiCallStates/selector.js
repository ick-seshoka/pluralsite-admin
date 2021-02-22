import { createReselect } from "reselect";

export const getApiCallsInProgress = (state) =>
  state.apiCallsInProgress?.callsInProgress || 0;
