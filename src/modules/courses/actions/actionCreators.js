import * as actions from "./actionTypes";

export function createCourse(course) {
  return { type: actions.CREATE_COURSE, payload: { course } };
}

export function setSourse(courses) {
  return { type: actions.SET_COURSES, payload: { courses } };
}

export function saveNewCourse(course) {
  return { type: actions.SAVE_NEW_COURSE, payload: { course } };
}

export function updateCourse(course) {
  return { type: actions.UPDATE_COURSE, payload: { course } };
}

export function deleteCourse(courseId) {
  return { type: actions.DELETE_COURSE, payload: { courseId } };
}
