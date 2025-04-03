import React from "react";
import Page from "./../containers/Page";
import { Routes, Route } from "react-router";
import Home from "./../pages/Home";
import About from './../pages/About'
import NotFound from './../pages/NotFound'
const AppRoutes = () => {
  return (
    <Page>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Page>
  );
};

export default AppRoutes;
