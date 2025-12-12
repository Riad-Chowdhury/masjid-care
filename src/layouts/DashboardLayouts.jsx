import React from "react";
import navLogo from ".././assets/navLogo.png";
import { NavLink, Outlet, Link } from "react-router";
import { RiUserSearchFill } from "react-icons/ri";
import {
  FiHome,
  FiUser,
  FiDollarSign,
  FiCalendar,
  FiUsers,
  FiFileText,
  FiBell,
} from "react-icons/fi";

const DashboardLayouts = () => {
  const links = [
    { to: "/", label: "Home", icon: <FiHome size={20} /> },
    {
      to: "/dashboard/userManagement",
      label: "User Management",
      icon: <FiUser size={20} />,
    },
    {
      to: "/dashboard/userManagementForm",
      label: "Add User",
      icon: <RiUserSearchFill size={20} />,
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
    <div className="drawer lg:drawer-open">
      {/* IMPORTANT: SAME ID EVERYWHERE */}
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* MAIN CONTENT */}
      <div className="drawer-content flex flex-col">
        {/* SMALL SCREEN NAVBAR */}
        <div className="navbar bg-base-200 w-full lg:hidden px-4">
          <label
            htmlFor="dashboard-drawer"
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
          <h2 className="font-bold text-xl ml-2">Dashboard</h2>
        </div>

        {/* TOP NAVBAR (LARGE SCREEN) */}
        <div className="navbar bg-white shadow hidden lg:flex px-6">
          <h2 className="font-bold text-2xl">Dashboard</h2>
        </div>

        {/* PAGE CONTENT */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>

      {/* SIDEBAR */}
      <div data-aos="zoom-out-right" className="drawer-side bg-[#525842]">
        {/* OVERLAY FOR SMALL SCREEN CLOSE */}
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* LOGO */}
          <div className="flex items-center mb-4">
            <img className="w-16 h-16 rounded-xl" src={navLogo} alt="" />
            <span className="btn-ghost font-semibold text-2xl ml-2">
              Masjid Care
            </span>
          </div>

          {/* NAV LINKS */}
          {links.map((link, index) => (
            <li key={index} className="border-b md:border-none p-0.5">
              <Link
                to={link.to}
                className="flex items-center gap-2 px-4 py-2 transition-all duration-200 hover:bg-white hover:shadow-lg hover:rounded-lg"
              >
                {link.icon} <span>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayouts;
