import React from "react";
import Page from "./../containers/Page";
import { Routes, Route } from "react-router";
import Home from "./../pages/Home";
const AppRoutes = () => {
  return (
    <Page>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Page>
  );
};

export default AppRoutes;
