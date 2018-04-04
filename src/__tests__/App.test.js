import React from "react";
import { shallow } from "enzyme";
import { assert } from "chai";
import App from "../App";

test("App component renders properly", () => {
  const wrapper = shallow(<App />);
  assert.ok(wrapper);
});
