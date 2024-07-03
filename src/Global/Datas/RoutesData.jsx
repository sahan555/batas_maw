import { lazy } from "react";
// Function to create a lazy-loaded component with a 300ms delay
const lazyWithDelay = (importFunc, delay = 0) => {
  return lazy(() => {
    return Promise.all([
      importFunc(),
      new Promise((resolve) => setTimeout(resolve, delay)),
    ]).then(([moduleExports]) => moduleExports);
  });
};

// Applying the delay to each lazy-loaded component
const Homepage = lazyWithDelay(() => import("../../Pages/Homepage"));
const Vehicles = lazyWithDelay(() => import("../../Pages/Vehicles/Vehicles"));
const VehicleDetails = lazyWithDelay(
  () => import("../../Pages/Vehicles/VehicleDetails"),
);
const Compare = lazyWithDelay(() => import("../../Pages/Vehicles/Compare"));
const About = lazyWithDelay(() => import("../../Pages/About/About"));
const Career = lazyWithDelay(() => import("../../Pages/About/Career"));
const Branches = lazyWithDelay(() => import("../../Pages/About/Branches"));
const Form = lazyWithDelay(() => import("../../Pages/Form"));
const SupportForm = lazyWithDelay(
  () => import("../../Component/Global/Forms/SupportForm"),
);
const Contact = lazyWithDelay(() => import("../../Pages/Contact"));
const Resale = lazyWithDelay(() => import("../../Pages/Resale"));
const Blogs = lazyWithDelay(() => import("../../Pages/Media/Blogs"));
const BlogDetails = lazyWithDelay(
  () => import("../../Pages/Media/BlogDetails"),
);
const Events = lazyWithDelay(() => import("../../Pages/Media/Events"));
const EventDetails = lazyWithDelay(
  () => import("../../Pages/Media/EventDetails"),
);
const Faq = lazyWithDelay(() => import("../../Pages/Faq"));
const Testimonials = lazyWithDelay(() => import("../../Pages/Testimonials"));
const GalleryPage = lazyWithDelay(() => import("../../Pages/GalleryPage"));
const Media = lazyWithDelay(() => import("../../Pages/Media/Media"));
const MediaDetails = lazyWithDelay(
  () => import("../../Pages/Media/MediaDetails"),
);
export const routes = [
  {
    path: "/",
    element: <Homepage />,
    breadcrumb: "Home",
  },
  {
    path: "/vehicles",
    element: <Vehicles />,
    breadcrumb: "Vehicles",
  },
  {
    path: "/vehicles/:slug",
    element: <VehicleDetails />,
  },
  {
    path: "/vehicles/compare/:slug",
    element: <Compare />,
  },
  {
    path: "/about",
    element: <About />,
    breadcrumb: "About Us",
  },
  {
    path: "/about/careers",
    element: <Career />,
    breadcrumb: "Career",
  },
  {
    path: "/about/branches",
    element: <Branches />,
    breadcrumb: "Branches",
  },
  {
    path: "/forms",
    element: <Form />,
    breadcrumb: "Forms",
  },
  {
    path: "/forms/support",
    element: <SupportForm />,
    breadcrumb: "Support Form",
  },
  {
    path: "/contact",
    element: <Contact />,
    breadcrumb: "Contact",
  },
  {
    path: "/resale",
    element: <Resale />,
    breadcrumb: "Resale",
  },
  {
    path: "/blog",
    element: <Blogs />,
    breadcrumb: "Blog",
  },
  {
    path: "/blog/:slug",
    element: <BlogDetails />,
  },
  {
    path: "/events",
    element: <Events />,
    breadcrumb: "Events",
  },
  {
    path: "/events/:slug",
    element: <EventDetails />,
  },
  {
    path: "/media",
    element: <Media />,
    breadcrumb: "Media",
  },
  {
    path: "/media/:slug",
    element: <MediaDetails />,
  },
  {
    path: "/faq",
    element: <Faq />,
    breadcrumb: "Faq",
  },
  {
    path: "/testimonials",
    element: <Testimonials />,
    breadcrumb: "Testimonials",
  },
  {
    path: "/gallery",
    element: <GalleryPage />,
    breadcrumb: "Gallery",
  },
];
