import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";
import Spinner from "../common/Spinner";

const CourseForm = ({
  course,
  authors,
  onSave,
  onChange,
  saving = false,
  loading,
  errors = {},
}) => {
  return (
    <form onSubmit={onSave}>
      {!loading ? (
        <h2>{course.id ? "Edit" : "Add"} Course</h2>
      ) : (
        <h2>Manage Course</h2>
      )}
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
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
        <>
          <TextInput
            name="title"
            label="Title"
            value={course.title}
            onChange={onChange}
            error={errors.title}
          />
          <SelectInput
            name="authorId"
            label="Author"
            value={course.authorId || ""}
            defaultOption="Select Author"
            options={authors.map((author) => ({
              value: author.id,
              text: author.name,
            }))}
            onChange={onChange}
            error={errors.author}
          />
          <TextInput
            name="category"
            label="Category"
            value={course.category}
            onChange={onChange}
            error={errors.category}
          />
          <button type="submit" disabled={saving} className="btn btn-primary">
            {saving ? "Saving..." : "Save"}
          </button>{" "}
        </>
      )}
    </form>
  );
};

CourseForm.propTypes = {
  authors: PropTypes.array.isRequired,
  course: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  loading: PropTypes.bool,
};

export default CourseForm;
