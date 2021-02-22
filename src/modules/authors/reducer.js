import * as actionTypes from "./actions/actionTypes";

const intialState = {
  authors: [],
};

function authorsReducer(state = intialState, action) {
  switch (action.type) {
    case actionTypes.SET_AUTHORS: {
      const {
        payload: { authors },
      } = action;

      return { ...state, authors: [...authors] };
    }

    case actionTypes.DELETE_AUTHOR: {
      const {
        payload: { authorId },
      } = action;

      const authorList = state.authors.filter(
        (author) => author.id !== authorId
      );

      return {
        ...state,
        authors: authorList,
      };
    }

    default:
      return state;
  }
}

export default authorsReducer;
