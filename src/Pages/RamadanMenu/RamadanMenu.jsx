import React from "react";
import { NavLink } from "react-router";
import { Calendar, Clock, Gift, Users, Star } from "lucide-react";

const ramadanMenu = [
  { bn: "রমজান", en: "Ramadan", path: "/ramadan", icon: <Star size={24} /> },
  {
    bn: "ইফতার সময়সূচি",
    en: "Iftar Schedule",
    path: "/iftar-schedule",
    icon: <Clock size={24} />,
  },
  {
    bn: "সেহরি ও ইফতার সময়",
    en: "Suhoor & Iftar Time",
    path: "/suhoor-iftar-time",
    icon: <Calendar size={24} />,
  },
  {
    bn: "দান রিপোর্ট",
    en: "Daily Donation Report",
    path: "/donation-report",
    icon: <Gift size={24} />,
  },
  {
    bn: "স্বেচ্ছাসেবক তালিকা",
    en: "Volunteer List",
    path: "/volunteers",
    icon: <Users size={24} />,
  },
];

export default function RamadanMenu() {
  return (
    <div
      style={{
        backgroundColor: "rgb(61, 58, 41)",
        color: "rgb(255, 215, 0)",
      }}
    >
      <div
        data-aos="fade-up"
        className="lg:h-[560px]  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-4 p-6 overflow-hidden"
      >
        {ramadanMenu.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 p-6 rounded-xl shadow-lg transform transition-all duration-300
             ${
               isActive
                 ? "bg-[#628141] scale-105 text-white"
                 : "bg-[#FFD700] hover:bg-[#8BAE66] hover:scale-105 text-white"
             }`
            }
          >
            <div>{item.icon}</div>
            <div className="flex flex-col">
              <span className="text-xl font-bold">{item.bn}</span>
              <span className="text-sm text-gray-100">{item.en}</span>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
