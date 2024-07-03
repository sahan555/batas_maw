import React from "react";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../../Global/Datas/RoutesData";

const Breadcrumbs = ({ data }) => {
  const location = useLocation();

  // Function to generate breadcrumbs
  const generateBreadcrumbs = (pathname) => {
    const pathSegments = pathname
      .split("/")
      .filter((segment) => segment !== "" && segment !== "compare"); // Skip the "compare" segment
    let cumulativePath = "";
    const breadcrumbs = [];

    breadcrumbs.push({ path: "/", breadcrumb: "Home" });

    for (let i = 0; i < pathSegments.length; i++) {
      cumulativePath += `/${pathSegments[i]}`;
      let matchedRoute = routes.find((route) => {
        // Check if route.path matches cumulativePath
        return route.path === cumulativePath;
      });

      if (matchedRoute) {
        breadcrumbs.push({
          path: matchedRoute.path,
          breadcrumb: matchedRoute.breadcrumb,
        });
      } else {
        // Handle cases where no exact match is found (optional)
        breadcrumbs.push({
          path: cumulativePath,
          breadcrumb: data ? data : pathSegments[i],
        });
      }
    }

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs(location.pathname);

  return (
    <div className="bg-black bg-opacity-55 py-3">
      <div className="side-padding">
        <div className="container mx-auto font-hermes text-sm text-white">
          {breadcrumbs.map((breadcrumb, index) => (
            <span
              key={breadcrumb.path}
              className={`${index !== 0 ? "ml-2" : ""}`}
            >
              <Link to={breadcrumb.path} className="pr-2">
                {breadcrumb.breadcrumb}
              </Link>
              {index < breadcrumbs.length - 1 && " / "}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
