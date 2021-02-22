import * as actions from "./actions/actionTypes";

const initialState = {
  courses: [],
  savingCourse: false,
};

function coursesReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_COURSES: {
      const {
        payload: { courses },
      } = action;

      return { ...state, courses: [...courses] };
    }

    case actions.SAVE_NEW_COURSE: {
      const {
        payload: { course },
      } = action;

      return {
        ...state,
        courses: [...state.courses, course],
      };
    }

    case actions.UPDATE_COURSE: {
      const {
        payload: { course },
      } = action;

      const courseList = state.courses.map((oldCourse) =>
        course.id === oldCourse.id ? course : oldCourse
      );

      return {
        ...state,
        courses: courseList,
      };
    }

    case actions.DELETE_COURSE: {
      const {
        payload: { courseId },
      } = action;

      const courseList = state.courses.filter(
        (course) => course.id !== courseId
      );

      return { ...state, courses: courseList };
    }

    default:
      return state;
  }
}

export default coursesReducer;
