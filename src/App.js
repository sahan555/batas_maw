import React from "react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import { lazy } from "react";
import Loading from "./Component/Global/Loading";
import Error from "./Pages/Error";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import { routes } from "./Global/Datas/RoutesData";

const App = () => {
  // const Homepage = lazy(() => import('./Pages/Homepage'));

  return (
    <>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
