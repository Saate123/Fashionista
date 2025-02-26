/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import SeeMore from "./pages/SeeMore";
import ProductDescription from "./pages/Description";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/see-more" element={<SeeMore />} />
          <Route path="/description" element={<ProductDescription />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
