import React from "react";
import { shallow } from "enzyme";
import App from "../App";

describe("App test", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  test("render component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
