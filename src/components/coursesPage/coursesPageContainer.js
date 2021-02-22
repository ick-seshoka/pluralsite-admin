import { connect } from "react-redux";

import CoursesPage from "./CoursesPage";
import { loadCourses, getCourses, deleteCourse } from "../../modules/courses";
import {
  loadAuthors,
  selectAuthors as getAuthors,
} from "../../modules/authors";
import { getApiCallsInProgress } from "../../modules/apiCallStates";

const mapStateToProps = (state) => ({
  courses: getCourses(state),
  authors: getAuthors(state),
  loading: getApiCallsInProgress(state) > 0,
});

const mapDispatchToProps = {
  loadCourses,
  loadAuthors,
  deleteCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
