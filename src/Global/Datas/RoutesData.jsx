import SupportForm from "../../Component/Global/Forms/SupportForm";
import About from "../../Pages/About/About";
import Branches from "../../Pages/About/Branches";
import Career from "../../Pages/About/Career";
import Form from "../../Pages/Form";
import Homepage from "../../Pages/Homepage";
import Vehicles from "../../Pages/Vehicles";

export const routes = [
  { path: "/", element: <Homepage />, breadcrumb: "Home" },
  { path: "/vehicles", element: <Vehicles />, breadcrumb: "Vehicles" },
//   {
//     path: "/vehicles/:vehiclesId",
//     element: < />,
//     breadcrumb: "Vehicles Detail",
//   },
  { path: "/about", element: <About />, breadcrumb: "About Us" },
  { path: "/about/careers", element: <Career />, breadcrumb: "Career" },
  { path: "/about/branches", element: <Branches />, breadcrumb: "Branches" },
  { path: "/forms", element: <Form />, breadcrumb: "Forms" },
  { path: "/forms/support", element: <SupportForm />, breadcrumb: "Support Form" },
];
