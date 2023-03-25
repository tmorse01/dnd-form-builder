import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FormBuilder from "./pages/FormBuilder";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form-builder" element={<FormBuilder />} />
    </Routes>
  );
};

export default AppRoutes;
