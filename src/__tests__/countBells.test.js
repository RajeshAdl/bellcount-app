import React from "react";
import { shallow } from "enzyme";
import { assert } from "chai";
import countBells from "../countBells";

describe("Testing countBells function", () => {
  it("should return 5 for start = '2:00' and end = '3:00'", () => {
    const startTime = "2:00";
    const endTime = "3:00";
    expect(countBells(startTime, endTime)).toEqual(5);
  });

  it("should return 5 for start = '14:00' and end = '15:00'", () => {
    const startTime = "2:00";
    const endTime = "3:00";
    expect(countBells(startTime, endTime)).toEqual(5);
  });

  it("should return 3 for start = '14:23' and end = '15:42'", () => {
    const startTime = "14:23";
    const endTime = "15:42";
    expect(countBells(startTime, endTime)).toEqual(3);
  });

  it("should return 24 for start = '23:00' and end = '1:00'", () => {
    const startTime = "23:00";
    const endTime = "1:00";
    expect(countBells(startTime, endTime)).toEqual(24);
  });

  it("should return 156 for same times", () => {
    const startTime = "6:00";
    const endTime = "6:00";
    expect(countBells(startTime, endTime)).toEqual(156);
  });

  it("should return 156 for same hour with end minutes less than start minutes", () => {
    const startTime = "6:30";
    const endTime = "6:15";
    expect(countBells(startTime, endTime)).toEqual(156);
  });

  it("should return 0 for same hour with end minutes greater than start minutes", () => {
    const startTime = "6:15";
    const endTime = "6:30";
    expect(countBells(startTime, endTime)).toEqual(0);
  });
});
