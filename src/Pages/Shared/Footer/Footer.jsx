import React from "react";
import navLogo from "../../../assets/navLogo.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer text-white sm:footer-horizontal bg-[url('assets/footer.png')] ... bg-no-repeat bg-cover bg-center bg-base-200  p-10">
      <aside>
        <div className="">
          <div className="flex items-center ">
            <img
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              className="w-30 h-30"
              src={navLogo}
              alt=""
            />
            <h2
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              className="text-4xl text-[#ecf53b]"
            >
              Masjid Care
            </h2>
          </div>
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            className="text-2xl text-[#ecf53b]"
          >
            Islamic community centre <br />
          </p>
        </div>
      </aside>
      <nav>
        <h6 className="text-3xl text-[#ecf53b] font-medium ">Information</h6>
        <div className="w-80 mt-4 text-lg text-[#ecf53b]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ullam
          sint fugiat explicabo voluptatum animi eveniet veritatis sed.
          Doloribus consequatur molestiae id iure quibusdam!
        </div>
      </nav>

      <nav>
        <h6 className=" text-3xl text-[#ecf53b] font-medium">
          Connect with us
        </h6>
        <div className="">
          <div className="">
            <ul className=" flex  mt-4 gap-2 justify-center items-center">
              <li>
                <FaFacebook className="text-4xl border-[#ecf53b] border-4 rounded-4xl p-1.5 hover:bg-[#29b929]" />
              </li>
              <li>
                <FaTwitter className="text-4xl border-[#ecf53b] border-4 rounded-4xl  p-1.5 hover:bg-[#29b929]" />
              </li>
              <li>
                <FaInstagramSquare className="text-4xl border-[#ecf53b] border-4 rounded-4xl p-1.5 hover:bg-[#29b929]" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
