import React from "react";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../../Global/Datas/RoutesData";

const Breadcrumbs = () => {
  const location = useLocation();

  const generateBreadcrumbs = (pathname) => {
    const pathSegments = pathname
      .split("/")
      .filter((segment) => segment !== "");
    let cumulativePath = "";
    const breadcrumbs = [];

    breadcrumbs.push({ path: "/", breadcrumb: "Home" });

    for (let segment of pathSegments) {
      cumulativePath += `/${segment}`;
      const matchedRoute = routes.find(
        (route) => route.path === cumulativePath,
      );

      if (matchedRoute) {
        breadcrumbs.push({
          path: matchedRoute.path,
          breadcrumb: matchedRoute.breadcrumb,
        });
      }
    }

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs(location.pathname);

  return (
    <div className="bg-black bg-opacity-55 py-3">
      <div className="container mx-auto text-white font-hermes text-sm">
        {breadcrumbs.map((breadcrumb, index) => (
          <span key={breadcrumb.path} className="[&:not(:last-child)]:mr-2">
            <Link to={breadcrumb.path} className=" pr-2">{breadcrumb.breadcrumb}</Link>
            {index < breadcrumbs.length - 1 && " / "}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumbs;
