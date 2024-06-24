import { lazy } from "react";

// Lazy load page components
const Homepage = lazy(() => import("../../Pages/Homepage"));
const Vehicles = lazy(() => import("../../Pages/Vehicles/Vehicles"));
const VehicleDetails = lazy(
  () => import("../../Pages/Vehicles/VehicleDetails"),
);
const Compare = lazy(() => import("../../Pages/Compare"));
const About = lazy(() => import("../../Pages/About/About"));
const Career = lazy(() => import("../../Pages/About/Career"));
const Branches = lazy(() => import("../../Pages/About/Branches"));
const Form = lazy(() => import("../../Pages/Form"));
const SupportForm = lazy(
  () => import("../../Component/Global/Forms/SupportForm"),
);
const Contact = lazy(() => import("../../Pages/Contact"));
const Resale = lazy(() => import("../../Pages/Resale"));
const Blogs = lazy(() => import("../../Pages/Media/Blogs"));

export const routes = [
  { path: "/", element: <Homepage />, breadcrumb: "Home" },
  { path: "/vehicles", element: <Vehicles />, breadcrumb: "Vehicles" },
  {
    path: "/vehicles/:slug",
    element: <VehicleDetails />,
  },
  {
    path: "/vehicles/compare/:slug",
    element: <Compare />,
    breadcrumb: "Compare",
  },
  { path: "/about", element: <About />, breadcrumb: "About Us" },
  { path: "/about/careers", element: <Career />, breadcrumb: "Career" },
  { path: "/about/branches", element: <Branches />, breadcrumb: "Branches" },
  { path: "/forms", element: <Form />, breadcrumb: "Forms" },
  {
    path: "/forms/support",
    element: <SupportForm />,
    breadcrumb: "Support Form",
  },
  { path: "/contact", element: <Contact />, breadcrumb: "Contact" },
  { path: "/resale", element: <Resale />, breadcrumb: "Resale" },
  { path: "/blog", element: <Blogs />, breadcrumb: "Blog" },
];
