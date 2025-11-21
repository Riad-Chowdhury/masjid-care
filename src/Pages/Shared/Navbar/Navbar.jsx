import { useState } from "react";
import navLogo from "../../../assets/navLogo.png";

import { Menu, LogOut } from "lucide-react";
import { Link, NavLink } from "react-router";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import PrivateRouts from "../../../Provider/PrivateRouts";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    console.log("Ok");
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sign-out successful.😫😫",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const [open, setOpen] = useState(false);

  const navItems = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "bg-white text-[#32CD32] px-3 py-1 rounded-md font-semibold"
              : "text-black hover:bg-white/20 px-3 py-1 rounded-md"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to={"/aboutUs"}
          className={({ isActive }) =>
            isActive
              ? "bg-white text-[#32CD32] px-3 py-1 rounded-md font-semibold"
              : "text-black hover:bg-white/20 px-3 py-1 rounded-md"
          }
        >
          About Us
        </NavLink>
      </li>

      <li>
        <NavLink
          to={"/ramadanMenu"}
          className={({ isActive }) =>
            isActive
              ? "bg-white text-[#32CD32] px-3 py-1 rounded-md font-semibold"
              : "text-black hover:bg-white/20 px-3 py-1 rounded-md"
          }
        >
          Ramadan Menu
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-[#90a955] text-black shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>

          <div className="flex items-center">
            <img className="w-16 h-16 rounded-2xl" src={navLogo} alt="" />
            <a className="btn-ghost font-semibold lg:text-2xl md:text-xl sm:text-sm">
              Masjid Care
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 ">{navItems}</ul>
        </div>
        <div className="navbar-end ">
          <div className="relative">
            <img
              onClick={() => setOpen(!open)}
              src={user?.photoURL}
              alt="User"
              className="w-10 h-10 rounded-full border-2 border-white object-cover cursor-pointer"
            />

            {/* Dropdown */}
            {open && (
              <div className="absolute right-0 mt-2 bg-white text-black shadow-md rounded-md w-40 py-2 z-50">
                {user && (
                  <>
                    <li>
                      <NavLink
                        to={"/Dashboard"}
                        className="flex w-full px-3 py-2 hover:bg-gray-100 text-sm items-center gap-2"
                      >
                        <Menu size={16} /> Dashboard
                      </NavLink>
                    </li>
                  </>
                )}
                {user ? (
                  <button
                    onClick={handleLogOut}
                    className="flex w-full px-3 py-2 hover:bg-gray-100 text-sm items-center gap-2"
                  >
                    <LogOut size={16} /> LogOut
                  </button>
                ) : (
                  <Link
                    to={"/auth/login"}
                    className="flex w-full px-3 py-2 hover:bg-gray-100 text-sm items-center gap-2"
                  >
                    <LogOut size={16} /> Login
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
