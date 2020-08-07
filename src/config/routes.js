import Blog from "../pages/Blog";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Privacy from "../pages/Privacy";

export default [
  {
    name: "home",
    path: "/",
    component: Home,
  },
  {
    name: "privacy",
    path: "/privacy",
    component: Privacy,
  },
  {
    name: "blog",
    path: "/blog",
    component: Blog,
  },
  {
    name: "notFound",
    component: NotFound,
  },
];
