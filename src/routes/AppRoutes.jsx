import React from "react";
import Page from "./../containers/Page";
import { Routes, Route } from "react-router";
import Home from "./../pages/Home";
import About from './../pages/About'
import Services from './../pages/Services'
import Contact from './../pages/Contact'
import Pricing from './../pages/Pricing'
import NotFound from './../pages/NotFound'
const AppRoutes = () => {
  return (
    <Page>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Page>
  );
};

export default AppRoutes;
