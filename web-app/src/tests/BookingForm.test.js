import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test('Renders the "Choose date" label', () => {
  render(<BookingForm />);

  // Check if the "Choose date" label is rendered
  const labelElement = screen.getByLabelText(/Choose date/i);
  expect(labelElement).toBeInTheDocument();
});
