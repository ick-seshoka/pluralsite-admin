import { createSelector } from "reselect";

import { selectAuthors } from "../authors";
import { newCourse } from "../../data/mockData";

export const selectCourses = (state) => state.courses?.courses || [];

export const getCourses = createSelector(
  selectCourses,
  selectAuthors,
  (courses, authors) => {
    return courses.length && authors.length
      ? courses.map((course) => {
          return {
            ...course,
            authorName: authors.find(({ id }) => id === 1).name,
          };
        })
      : [];
  }
);

export const getCourse = (state, slug) =>
  createSelector(selectCourses, (courses, slug) => {
    console.log(slug);
    return courses.find((course) => course.slug === slug) || newCourse;
  });

export const getSavingCourse = (state) => state.courses?.savingCourse || false;
