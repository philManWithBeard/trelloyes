import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import List from "./List.js";

describe("List Component", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<List />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("Renders as expected", () => {
    const tree = renderer.create(
      <List key={1} header="hello" cards={[1, 2, 3, 4]} />
    );
  });
});
