import React from "react";
import AboutCard from "./AboutCard";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AboutUs = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: posts = [], refetch } = useQuery({
    queryKey: ["allAboutUs", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get("/posts");
      return res.data;
    },
  });

  return (
    <div className="mx-auto px-4 bg-amber-50">
      {/* Header */}
      <h2 className="text-3xl font-bold text-center my-8 text-[#3d3a29]">
        About Us
      </h2>

      {/* Create Post Box */}
      <div className="flex items-center gap-4 mb-6 justify-center">
        <img
          className="w-10 h-10 rounded-full object-cover border"
          src={user?.photoURL}
          alt="user"
        />
        <Link to="/addPost">
          <div className="border rounded-full px-6 py-3 cursor-pointer hover:bg-gray-200">
            What's on your mind? 😀
          </div>
        </Link>
      </div>

      {/* Posts Grid */}
      {/* Posts Grid */}
      <div className="flex flex-col items-center gap-6">
        {posts.map((post) => (
          <div
            key={post._id}
            className="w-full max-w-md"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <AboutCard post={post} refetch={refetch} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
