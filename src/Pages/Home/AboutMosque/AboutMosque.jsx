import React from "react";
import b2 from "../../../assets/b2.jpg";
import b3 from "../../../assets/b3.jpg";
import { FaMosque } from "react-icons/fa";
import { Link } from "react-router";
const AboutMosque = () => {
  return (
    <div>
      <div className="font-semibold flex flex-col justify-center items-center mt-20 mb-10 px-4">
        {/* Icon */}
        <h2 className="text-[#FFD700] text-4xl mb-2">
          <FaMosque />
        </h2>

        {/* Subtitle */}
        <p className="text-[#292222ee] text-sm text-center">
          Welcome to our Masjid
        </p>

        {/* Main Title */}
        <h1
          className="text-[#292222ee] font-serif text-center 
     text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-[650px]"
        >
          Know The Real History of Masjid
        </h1>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row flex-wrap mt-10 justify-center items-center gap-10">
          {/* Left Text section */}
          <div className="max-w-[350px] text-center lg:text-left">
            <p className="text-[#292222ee] text-sm mb-5">
              error nesciunt tempora labore eaque enim porro suscipit dolore
              quidem repudiandae at voluptatibus est earum dolor laborum,
              deserunt ex optio consequatur? Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Sequi ut cum possimus eveniet
              architecto laborum tenetur aliquam?
            </p>

            <ol className="mb-5 text-[#292222ee] space-y-2">
              <li> ⨀ 5 Waqto Namaj Aday kora</li>
              <li> ⨀ Jakat Dawya</li>
              <li> ⨀ Iman Thik Rakha</li>
              <li> ⨀ Roja Palon Kora</li>
            </ol>

            <button className="btn btn-outline btn-warning">
              <Link>Warning</Link>
            </button>
          </div>

          {/* Right Image section */}
          <div className=" flex space-x-2.5">
            {" "}
            <img
              className="w-[200px] h-[241px] mt-40 rounded-b-full"
              src={b2}
              alt=""
            />{" "}
            <img
              className="w-[200px] h-[380px] rounded-t-full "
              src={b3}
              alt=""
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMosque;
