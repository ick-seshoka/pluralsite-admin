import { createSelector } from "reselect";

export const selectAuthors = (state) => state.authors?.authors || [];
