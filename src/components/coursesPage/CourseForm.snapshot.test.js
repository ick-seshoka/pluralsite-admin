import React from "react";
import renderer from "react-test-renderer";
import CourseForm from "./CourseForm";
import { courses, authors } from "../../data";

it("sets submit button label to 'saving' when saving is true", () => {
  const tree = renderer.create(
    <CourseForm
      course={courses[0]}
      authors={authors}
      onChange={jest.fn()}
      onSave={jest.fn()}
      saving
    />
  );

  expect(tree).toMatchSnapshot();
});
