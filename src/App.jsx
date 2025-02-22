import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/privacy-policy" element={<Privacy />} /> */}
          {/* <Route path="/wait-list" element={<GetStarted />} />  */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
