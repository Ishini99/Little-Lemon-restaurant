import React from "react";

function BookingSlot({ time }) {
  return (
    <li>
      <button>{time}</button>
    </li>
  );
}

export default BookingSlot;
