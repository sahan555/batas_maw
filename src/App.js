import React from "react";
import { Suspense } from "react";
import {Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Loading from "./Component/Global/Loading";
import Error from "./Pages/Error";
import Navbar from "./Component/Navbar/Navbar";

const App = () => {
  const Homepage = lazy(() => import('./Pages/Homepage'));

  return (
    <>
    <Navbar/>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
