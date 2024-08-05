// src/Routers/AppRouter.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/pages/navpages/Home/home'; // Ensure this path is correct

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Add more routes here as needed */}
    </Routes>
  );
};

export default AppRouter;
