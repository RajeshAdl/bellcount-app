import React from "react";
import { shallow } from "enzyme";
import { assert } from "chai";
import isValidTime from "../helpers/isValidTime";

describe("Testing time validation function", () => {
  it("should return true for '2:00'", () => {
    expect(isValidTime("2:00")).toBeTruthy();
  });

  it("should return true for '23:59'", () => {
    expect(isValidTime("23:59")).toBeTruthy();
  });

  it("should return true for '02:00'", () => {
    expect(isValidTime("02:00")).toBeTruthy();
  });

  it("should return false for '2:0'", () => {
    expect(isValidTime("2:0")).toBeFalsy();
  });

  it("should return false for '24:00'", () => {
    expect(isValidTime("24:00")).toBeFalsy();
  });

  it("should return false for '30:45'", () => {
    expect(isValidTime("30:45")).toBeFalsy();
  });

  it("should return false for '20:65'", () => {
    expect(isValidTime("20:65")).toBeFalsy();
  });
});
