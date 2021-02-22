import * as courseApi from "../../api/courseApi";
import * as courseActions from "./actions/actionCreators";
import * as apiCallStateActions from "../apiCallStates/actions/actionCreators";

export function loadCourses() {
  return function (dispatch) {
    dispatch(apiCallStateActions.setCallInProgress());
    return courseApi
      .getCourses()
      .then((courses) => {
        dispatch(courseActions.setSourse(courses));
        dispatch(apiCallStateActions.setCallCompleted());
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function saveCourse(course) {
  return function (dispatch, getState) {
    return courseApi
      .saveCourse(course)
      .then(() => {
        dispatch(
          course.id
            ? courseActions.updateCourse(course)
            : courseActions.saveNewCourse(course)
        );
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function deleteCourse(courseId) {
  return function (dispatch) {
    dispatch(courseActions.deleteCourse(courseId));
    return courseApi.deleteCourse(courseId).catch((error) => {
      throw error;
    });
  };
}
