import * as actionTypes from "./actionTypes";

export function setAuthors(authors) {
  return { type: actionTypes.SET_AUTHORS, payload: { authors } };
}

export function deleteAuthor(authorId) {
  return { type: actionTypes.DELETE_AUTHOR, payload: { authorId } };
}
