import { connect } from "react-redux";

import {
  selectAuthors,
  loadAuthors,
  deleteAuthor,
} from "../../modules/authors";
import { loadCourses, getCourses } from "../../modules/courses";
import { getApiCallsInProgress } from "../../modules/apiCallStates";
import AuthorsPage from "./authorsPage";

const mapSTateToProps = (state) => ({
  courses: getCourses(state),
  authors: selectAuthors(state),
  loading: getApiCallsInProgress(state),
});

const mapDispatchToProps = {
  loadAuthors,
  loadCourses,
  deleteAuthor,
};

export default connect(mapSTateToProps, mapDispatchToProps)(AuthorsPage);
