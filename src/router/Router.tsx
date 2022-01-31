import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import * as Pages from '../pages';
import Navbar from '../navigation/Navbar';
import { Footer } from '../components'

const Router = () => {
  console.log(process.env)
  return (
    <>
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
    <Footer></Footer>
    </>
  );
}

export default Router;
