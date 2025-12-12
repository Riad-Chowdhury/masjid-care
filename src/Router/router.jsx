import { createBrowserRouter } from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AuthLayouts from "../layouts/AuthLayouts";
import PrivateRouts from "../Provider/PrivateRouts";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AddPost from "../Pages/AddPost/AddPost";
import DashboardLayouts from "../layouts/DashboardLayouts";
import UserManagement from "../Pages/Dashboard/AccountantDashboard/UserManagement";
import RamadanMenu from "../Pages/RamadanMenu/RamadanMenu";
import Error from "../Pages/Error/Error";
import Ramadan from "../Pages/RamadanMenu/MenuItems/Ramadan";
import AddRamadanItem from "../Pages/RamadanMenu/MenuItems/AddRamadanItem";
import Contact from "../Pages/Contact/Contact";
import ContactForm from "../Pages/ContactForm/ContactForm";
import ContactUpdateForm from "../Pages/ContactForm/ContactUpdateForm/ContactUpdateForm";
import UserManagementForm from "../Pages/UserManagementForm/userManagementForm";
import UserManagementDetails from "../Pages/UserManagementDetails/UserManagementDetails";

export const router = createBrowserRouter([
  {
    path: "/*",
    Component: Error,
  },
  {
    path: "/",
    Component: RootLayouts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "ramadanMenu",
        Component: RamadanMenu,
      },
      {
        path: "ramadan",
        Component: Ramadan,
      },
      {
        path: "addRamadanItem",
        Component: AddRamadanItem,
      },
      {
        path: "aboutUs",
        element: (
          <PrivateRouts>
            <AboutUs></AboutUs>
          </PrivateRouts>
        ),
      },
      {
        path: "addPost",
        element: (
          <PrivateRouts>
            <AddPost></AddPost>
          </PrivateRouts>
        ),
      },
      {
        path: "contact",
        element: (
          <PrivateRouts>
            <Contact></Contact>
          </PrivateRouts>
        ),
      },
      {
        path: "contactPage",
        Component: ContactForm,
      },
      {
        path: "contactUpdateForm/:id",
        Component: ContactUpdateForm,
        loader: ({ params }) =>
          fetch(`https://masjid-care-server.onrender.com/contact/${params.id}`),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayouts></AuthLayouts>,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRouts>
        <DashboardLayouts></DashboardLayouts>
      </PrivateRouts>
    ),
    children: [
      {
        path: "userManagement",
        Component: UserManagement,
      },
      {
        path: "userManagementForm",
        Component: UserManagementForm,
      },
      {
        path: "userManagementDetails/:id",
        loader: ({ params }) =>
          fetch(`https://masjid-care-server.onrender.com/users/${params.id}`),
        Component: UserManagementDetails,
      },
    ],
  },
]);
