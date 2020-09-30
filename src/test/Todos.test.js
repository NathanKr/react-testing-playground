import React from "react";
import {render} from '@testing-library/react'
import Todos from "../components/Todos";

describe("Todos test with testing-library/react", () => {
  const {getByText} = render(<Todos/>);

  test('Todos text exist',() =>{
    // --- this is using testing-library/react
    expect(getByText("Add")).not.toBeNull()
  })
});
