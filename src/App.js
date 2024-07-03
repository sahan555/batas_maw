import React from "react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import { lazy } from "react";
import Loading from "./Component/Global/Loading";
import Error from "./Pages/Error";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import ScrollToTop from "./Component/Global/ScrollToTop";
import { HelmetProvider } from "react-helmet-async";
import { routes } from "./Global/Datas/RoutesData";
import MetaHelmet from "./Component/Global/MetaHelmet";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <HelmetProvider>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
            <Route
              path="*"
              element={
                <>
                  <MetaHelmet title={"Batas Maw"} />
                  <Error />
                </>
              }
            />
          </Routes>
        </Suspense>
        <Footer />
      </HelmetProvider>
    </>
  );
};

export default App;
