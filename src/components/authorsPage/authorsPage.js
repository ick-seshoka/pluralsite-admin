import React, { useEffect } from "react";
import PropTypes from "prop-types";
import AuthorsList from "./authorsList";
import Spinner from "../common/Spinner";

const AuthorsPage = ({
  authors,
  loadAuthors,
  loading,
  deleteAuthor,
  courses,
  loadCourses,
}) => {
  useEffect(() => {
    if (authors.length === 0) {
      loadAuthors();
    }
    if (courses.length === 0) {
      loadCourses();
    }
  }, []);

  return (
    <>
      <h2>Course Authors</h2>
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
        <AuthorsList
          authors={authors}
          deleteAuthor={deleteAuthor}
          courses={courses}
        />
      )}
    </>
  );
};

AuthorsPage.propTypes = {
  authors: PropTypes.array.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  deleteAuthor: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
};

export default AuthorsPage;
