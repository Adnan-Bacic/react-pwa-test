import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import * as Pages from '../pages';
import Navbar from '../navigation/Navbar';

function Router() {
  return (
    <BrowserRouter basename="/folders/react/react-pwa-test/">
      <Navbar />
      <Routes>
        <Route path="/" element={<Pages.Home />} />
        <Route path="about" element={<Pages.About />} />
        <Route path="items" element={<Pages.Items />}>
          <Route path=":id" element={<Pages.Item />} />
        </Route>
        <Route path="*" element={<Pages.NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
