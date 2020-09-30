import React from "react";
import { mount, shallow } from "enzyme";
import axios from "axios";
import FetchAdvice from "../components/FetchAdvice";
import { act } from "react-dom/test-utils";

jest.mock("axios");

const data = {
  data: {
    slip: {
      advice: "Test",
    },
  },
};

describe("FetchAdvice test", () => {
  let wrapper;

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders with loading", () => {
    wrapper = shallow(<FetchAdvice />);

    expect(wrapper.find("div").text()).toBe("...loading");
  });

  test("renders with data", async () => {
    await act(async () => {
      await axios.get.mockImplementationOnce(() => Promise.resolve(data));
      wrapper = mount(<FetchAdvice />);
    });

    await expect(axios.get).toHaveBeenCalledWith(
      "https://api.adviceslip.com/advice",
      {
        "Content-Type": "application/xml; charset=utf-8",
      }
    );

    await expect(axios.get).toHaveBeenCalledTimes(1);

    wrapper.update();

    await expect(wrapper.find("h1").text()).toEqual("Test");
  });
});
