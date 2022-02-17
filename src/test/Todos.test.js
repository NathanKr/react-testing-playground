import React from "react";
import {fireEvent, render} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Todos from "../components/Todos";

// --- a less simple react-library test

describe("Todos test with testing-library/react", () => {
  let getByText , getByPlaceholderText;
  beforeEach(()=>{
    const todos = render(<Todos/>);
    getByText = todos.getByText;
    getByPlaceholderText = todos.getByPlaceholderText;
  })
  
  test('Todos text exist',() =>{
    // --- this is using testing-library/react
    const element = getByText("Add #1");
    expect(element).not.toBeNull()
  })

  test('Todos input exist',() =>{
    // --- this is using testing-library/react
    const element = getByPlaceholderText("insert a todo");
    expect(element).not.toBeNull()
  })

  test('Todos input is changed',() =>{
    // --- this is using testing-library/react
    const input = getByPlaceholderText("insert a todo");
    // --- set the input value
    fireEvent.change(input,{target : {value : "todo1"}})
    expect(input.value).toBe("todo1")
  })

  test('button text is changed to Add #2 after todo is added -> use userEvent',() =>{
    // --- this is using testing-library/react
    const input = getByPlaceholderText("insert a todo");
    // --- set the input value
    userEvent.type(input,"todo1");
    // fireEvent.change(input,{target : {value : "todo1"}})
    let buttonElem = getByText("Add #1");
    userEvent.click(buttonElem);
    // fireEvent.click(buttonElem);
    buttonElem = getByText("Add #2");
    expect(buttonElem).not.toBeNull();
  })

  test('button text is changed to Add #2 after todo is added',() =>{
    // --- this is using testing-library/react
    const input = getByPlaceholderText("insert a todo");
    // --- set the input value
    fireEvent.change(input,{target : {value : "todo1"}})
    let buttonElem = getByText("Add #1");
    fireEvent.click(buttonElem);
    buttonElem = getByText("Add #2");
    expect(buttonElem).not.toBeNull();
  })

  test('todo is added to the UI',() =>{
    // --- this is using testing-library/react
    const input = getByPlaceholderText("insert a todo");
    // --- set the input value -> may be easier with user input 
    fireEvent.change(input,{target : {value : "todo1"}})
    let buttonElem = getByText("Add #1");
    fireEvent.click(buttonElem);
    const textElement = getByText("todo1");
    expect(textElement).not.toBeNull();
  })

});
