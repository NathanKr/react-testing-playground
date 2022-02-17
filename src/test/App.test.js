import React from "react";
import ReactDOM from "react-dom";
import App from "../components/App";

// --- pure jest test

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
    // --- this is using testing-library/jest-dom
    // -- innerTest is NOT working in jest use innerHTML or textContent
    expect(root.querySelector("h2").textContent).toBe("Todos");
  });
});
