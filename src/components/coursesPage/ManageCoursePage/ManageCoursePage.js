import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

import CourseForm from "../CourseForm";
import { newCourse } from "../../../data/mockData";
import { setSourse } from "../../../modules/courses/actions/actionCreators";

const ManageCoursesPage = ({
  loadCourses,
  loadAuthors,
  courses,
  authors,
  saveCourse,
  history,
  loading,
  savingCourse,
  ...props
}) => {
  const [course, setCourse] = useState({ ...props.course });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (courses.length === 0) {
      loadCourses();
    } else {
      setCourse({ ...props.course });
    }

    if (authors.length === 0) {
      loadAuthors();
    }
  }, [props.course]);

  function handleOnChange(event) {
    const { name, value } = event.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: name === "authorId" ? parseInt(value, 10) : value,
    }));
  }

  function isFormInvalid() {
    const { title, author, category } = course;

    const errors = {};

    if (!title) errors.title = "Title is required";
    if (!author) errors.author = "Author is required";
    if (!category) errors.category = "Category is required";

    setErrors(errors);

    return Object.keys(errors).lenght > 0;
  }

  function handleSaveCourse(event) {
    event.preventDefault();
    if (isFormInvalid()) return;
    setSaving(true);
    saveCourse(course)
      .then(() => {
        setSaving(false);
        setCourse({ ...newCourse });
        toast.success("📒 Course Saved!");
        history.push("/courses");
      })
      .catch((e) => {
        setSaving(false);
        setErrors({ onSave: e.message });
      });
  }

  return (
    <CourseForm
      course={course}
      errors={errors}
      authors={authors}
      onChange={handleOnChange}
      onSave={handleSaveCourse}
      loading={loading}
      saving={saving}
    />
  );
};

ManageCoursesPage.propTypes = {
  course: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  saveCourse: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  savingCourse: PropTypes.bool,
};

export default ManageCoursesPage;
