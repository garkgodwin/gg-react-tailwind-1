import React from "react";
import Page from "./../containers/Page";
import { Routes, Route } from "react-router";
import Home from "./../pages/Home";
import About from './../pages/About'
const AppRoutes = () => {
  return (
    <Page>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Page>
  );
};

export default AppRoutes;
