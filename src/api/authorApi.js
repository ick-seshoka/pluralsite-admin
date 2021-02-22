import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/authors/";

export function getAuthors() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function deletAuthor(authorId) {
  return fetch(baseUrl + authorId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
