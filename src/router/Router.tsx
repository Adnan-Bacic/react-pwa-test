import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import * as pages from '../pages'
import Navbar from "../navigation/Navbar";

const Router = () => {
  return (
      <>
<BrowserRouter basename="/folders/react/react-pwa-test/">
    <Navbar></Navbar>
    <Routes>
        <Route path="/" element={<pages.Home />} />
        <Route path="about" element={<pages.About />} />
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default Router