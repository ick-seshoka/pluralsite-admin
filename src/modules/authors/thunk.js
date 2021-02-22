import * as authorApi from "../../api/authorApi";
import * as actions from "./actions/actionsCreators";
import * as apiCallStateActions from "../apiCallStates/actions/actionCreators";

export function loadAuthors() {
  return function (dispatch) {
    dispatch(apiCallStateActions.setCallInProgress());
    return authorApi
      .getAuthors()
      .then((authors) => {
        dispatch(actions.setAuthors(authors));
        dispatch(apiCallStateActions.setCallCompleted());
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function deleteAuthor(authorId) {
  return function (dispatch) {
    dispatch(apiCallStateActions.setCallInProgress());
    return authorApi
      .deletAuthor(authorId)
      .then(() => {
        dispatch(actions.deleteAuthor(authorId));
        dispatch(apiCallStateActions.setCallCompleted());
      })
      .catch((error) => {
        dispatch(apiCallStateActions.setCallFailed());
        throw error;
      });
  };
}
