import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

describe("App dom test", () => {
  let root;

  beforeAll(() => {
    root = document.createElement("div");
    ReactDOM.render(<App />, root);
  });

  test("this is a success test", () => {
    expect(1).toBe(1);
  });

  test("h2 is Todos", () => {
    // -- innerTest is NOT working in jest use innerHTML or textContent
    expect(root.querySelector("h2").textContent).toBe("Todos");
  });

  test("Add button exist", () => {
    expect(root.querySelector("button").textContent).toBe("Add");
  });
});
