import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Users from "../pages/Users";
import Login from "../pages/Login";
import Courses from "../pages/Courses"; // Import Courses component
import Learn from "../pages/Learn"; // Import Learn component
import Fees from "../pages/Fees"; // Import Fees component
import UserDetails from "../pages/UserDetails";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/users" element={<Users />} />
      <Route path="/login" element={<Login />} />
      <Route path="/courses" element={<Courses />} /> {/* Route for Courses page */}
      <Route path="/learn" element={<Learn />} /> {/* Route for Learn page */}
      <Route path="/fees" element={<Fees />} /> {/* Route for Fees page */}
      <Route path="/users/:user_id" element={<UserDetails />} />
    </Routes>
  );
}
