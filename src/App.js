import React from "react";
import { Suspense } from "react";
import {Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Loading from "./Component/Loading/Loading";
import Error from "./Pages/Error";

const App = () => {
  const Homepage = lazy(() => import('./Pages/Homepage'));

  return (
    <>
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
