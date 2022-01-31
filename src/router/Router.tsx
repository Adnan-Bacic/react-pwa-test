import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import * as Pages from '../pages';
import Navbar from '../navigation/Navbar';

const Router = () => {
  return (
    <BrowserRouter basename="/folders/react/react-pwa-test/">
      <Navbar />
      <Routes>
        <Route path="/" element={<Pages.Home />} />
        <Route path="about" element={<Pages.About />} />
        <Route path="items" element={<Pages.Items />}>
          <Route path=":id" element={<Pages.Item />} />
        </Route>
        <Route path="item2/:id" element={<Pages.Item2 />} />
        <Route path="*" element={<Pages.NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
