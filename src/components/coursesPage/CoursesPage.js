import React, { Component } from "react";
import PropTypes from "prop-types";
import CourseList from "./CourseList";
import Spinner from "../common/Spinner";

class CoursesPage extends Component {
  componentDidMount() {
    const { loadCourses, loadAuthors, courses, authors } = this.props;

    if (courses.length === 0) {
      loadCourses();
    }

    if (authors.length === 0) {
      loadAuthors();
    }
  }

  handleRedirect = () => {
    this.props.history.push("/course");
  };

  render() {
    const { courses, loading, deleteCourse } = this.props;

    return (
      <>
        <h2 style={{ display: "inline-block" }}>Courses</h2>
        <button
          style={{ float: "right" }}
          type="submit"
          className="btn btn-primary"
          onClick={this.handleRedirect}
        >
          Add Course
        </button>
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "80vh",
            }}
          >
            <Spinner />
          </div>
        ) : (
          <CourseList courses={courses} deleteCourse={deleteCourse} />
        )}
      </>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  deleteCourse: PropTypes.func.isRequired,
};

export default CoursesPage;
