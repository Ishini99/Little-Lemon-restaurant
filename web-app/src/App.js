import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookingPage from "./BookingPage";
import Nav from "./Nav"; // Assuming you have a Nav component

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/booking" element={<BookingPage />} />
        {/* Other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
