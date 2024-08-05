// src/components/layouts/Layouts.jsx
import React, { Fragment } from 'react';
import Header from '../pages/header/Header'; // Ensure this path is correct
import Footer from '../pages/footer/Footer'; // Ensure this path is correct
import AppRouter from '../../Routers/router'; // Ensure this path is correct

const Layouts = () => {
  return (
    <Fragment>
      <Header />
      <div>
        <AppRouter />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layouts;
