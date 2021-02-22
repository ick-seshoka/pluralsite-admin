import React from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

const AuthorsList = ({ authors, deleteAuthor, courses }) => {
  const authorHasCourse = (authorId) => {
    return courses.filter((course) => course.authorId === authorId).length;
  };

  const handleDeleteAuthor = (authoId) => {
    if (!authorHasCourse(authoId)) {
      toast.success("👨🏽‍🏫 Author deleted");
      deleteAuthor(authoId);
    } else {
      toast.warning("⚠️ Author has an active course and cannot be deleted");
    }
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {authors.map((author) => {
          return (
            <tr key={author.id}>
              <td>{author.name}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => handleDeleteAuthor(author.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

AuthorsList.propTypes = {
  authors: PropTypes.array.isRequired,
  deleteAuthor: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
};

export default AuthorsList;
