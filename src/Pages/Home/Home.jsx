import React from "react";
import Banner from "./banner/banner";
import NamajWacto from "./NamajWacto/NamajWacto";
import AboutMosque from "./AboutMosque/AboutMosque";
import Profile from "./Profile/Profile";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <NamajWacto></NamajWacto>
      <AboutMosque></AboutMosque>
      <Profile></Profile>
    </div>
  );
};

export default Home;
