import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Card from "./Card.js";

describe("Card Component", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("Renders the UI as expected", () => {
    const tree = renderer
      .create(<Card title="hello" content="test card" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
