import { render, screen } from "@testing-library/react";
import Main, { initializeTimes, updateTimes } from "./Main";

// Test initializeTimes function
test("initializeTimes should return correct initial available times", () => {
  const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];
  const result = initializeTimes();

  expect(result).toEqual(expectedTimes);
});

// Mock dispatch function for useReducer
const mockDispatch = jest.fn();

test("updateTimes should dispatch the correct available times", () => {
  const initialTimes = ["17:00", "18:00", "19:00"];
  const updatedTimes = ["19:00", "20:00", "21:00"];

  // Call the updateTimes function
  updateTimes("2024-12-25", mockDispatch);

  // Check if the dispatch function is called with the correct action
  expect(mockDispatch).toHaveBeenCalledWith({
    type: "UPDATE_TIMES",
    times: updatedTimes,
  });
});
