import React from "react";
import ReactDOM from "react-dom";
import {getQueriesForElement} from '@testing-library/dom'
import Todos from "../components/Todos";

describe("Todos test with testing-library", () => {
  const root = document.createElement("div");
  const {getByText} = getQueriesForElement(root);

  beforeAll(() => {
    ReactDOM.render(<Todos />, root);
  });

  test('Todos text exist',() =>{
    // --- this is using testing-library/dom
    expect(getByText("Add")).not.toBeNull()
  })

});
