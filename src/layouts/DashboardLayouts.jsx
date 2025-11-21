import React from "react";
import navLogo from ".././assets/navLogo.png";
import { NavLink, Outlet } from "react-router";
import {
  FiHome,
  FiUser,
  FiDollarSign,
  FiCalendar,
  FiUsers,
  FiFileText,
  FiBell,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { Link } from "react-router";
const DashboardLayouts = () => {
  const links = [
    { to: "/", label: "Dashboard", icon: <FiHome size={20} /> },
    {
      to: "/user-management",
      label: "User Management",
      icon: <FiUser size={20} />,
    },
    {
      to: "/fee-tracking",
      label: "Fee Tracking",
      icon: <FiDollarSign size={20} />,
    },
    {
      to: "/ramadan-donations",
      label: "Ramadan Donations",
      icon: <FiCalendar size={20} />,
    },
    { to: "/reports", label: "Reports", icon: <FiFileText size={20} /> },
    {
      to: "/imam-moazzin",
      label: "Imam & Moazzin",
      icon: <FiUsers size={20} />,
    },
    {
      to: "/management-team",
      label: "Management Team",
      icon: <FiUsers size={20} />,
    },
    {
      to: "/taraweeh-schedule",
      label: "Taraweeh Schedule",
      icon: <FiCalendar size={20} />,
    },
    { to: "/volunteers", label: "Volunteers", icon: <FiUsers size={20} /> },
    {
      to: "/ramadan-expenses",
      label: "Ramadan Expenses Approval",
      icon: <FiDollarSign size={20} />,
    },
    {
      to: "/announcements",
      label: "Announcements",
      icon: <FiBell size={20} />,
    },
  ];
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          <div className="navbar bg-base-300 w-full lg:hidden">
            <div className="flex-none ">
              <label
                htmlFor="my-drawer-2"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="mx-2 flex-1 px-2 lg:hidden">Dashboard</div>
          </div>
          {/* Page content here */}
          <Outlet></Outlet>
          {/* Page content here */}
        </div>
        <div data-aos="zoom-out-right" className="drawer-side bg-[#525842]">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <div className="flex items-center">
              <img className="w-16 h-16 rounded-2xl" src={navLogo} alt="" />
              <a className="btn-ghost font-semibold lg:text-2xl md:text-xl sm:text-sm">
                Masjid Care
              </a>
            </div>
            {links.map((link, index) => (
              <li key={index} className="border-b md:border-none p-0.5">
                <Link
                  to={link.to}
                  className="flex items-center gap-1 px-4 py-2 transition-all duration-200 hover:bg-white hover:shadow-lg hover:rounded-lg "
                >
                  {link.icon} {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayouts;
