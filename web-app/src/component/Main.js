import React, { useReducer, useState } from "react";
import BookingForm from "./BookingForm";
import BookingSlot from "./BookingSlot";

// Initial state for available times
const initialState = {
  availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00"],
};

// Reducer function to update available times
function timesReducer(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      // Update available times based on the selected date (for now we are returning the same times)
      return {
        ...state,
        availableTimes: action.times,
      };
    default:
      return state;
  }
}

function Main() {
  const [state, dispatch] = useReducer(timesReducer, initialState);
  const [selectedDate, setSelectedDate] = useState("");

  const updateTimes = (date) => {
    // Function to handle updating times based on date (can add logic here)
    // For now, it returns the same available times.
    const times = ["17:00", "18:00", "19:00", "20:00", "21:00"];
    dispatch({ type: "UPDATE_TIMES", times });
  };

  return (
    <div>
      <h1>Little Lemon Reservation</h1>
      <BookingForm
        availableTimes={state.availableTimes}
        updateTimes={updateTimes}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <div>
        <h2>Available Booking Slots</h2>
        <ul>
          {state.availableTimes.map((time, index) => (
            <BookingSlot key={index} time={time} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Main;
