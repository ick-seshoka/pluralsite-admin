import { connect } from "react-redux";

import ManageCoursePage from "./ManageCoursePage";
import {
  loadCourses,
  getCourses,
  saveCourse,
  getSavingCourse,
} from "../../../modules/courses";
import {
  loadAuthors,
  selectAuthors as getAuthors,
} from "../../../modules/authors";
import { newCourse } from "../../../data/mockData";
import { getApiCallsInProgress } from "../../../modules/apiCallStates";

const mapStateToProps = (state, props) => {
  const { slug } = props.match.params;
  const courses = getCourses(state);
  const course = courses.find((course) => course.slug === slug) || newCourse;

  return {
    courses,
    authors: getAuthors(state),
    course: course,
    loading: getApiCallsInProgress(state) > 0,
    savingCourse: getSavingCourse(state),
  };
};

const mapDispatchToProps = {
  loadCourses,
  loadAuthors,
  saveCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
