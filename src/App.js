import React from "react";
import { Suspense } from "react";
import {Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Loading from "./Component/Global/Loading";
import Error from "./Pages/Error";
import Navbar from "./Component/Navbar/Navbar";
import Branches from "./Pages/Branches";

const App = () => {
  const Homepage = lazy(() => import('./Pages/Homepage'));

  return (
    <>
    <Navbar/>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path='/branches' element={<Branches/>}/>
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
