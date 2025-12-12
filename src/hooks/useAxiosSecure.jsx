import axios from "axios";
import React from "react";
const axiosSecure = axios.create({
  baseURL: `https://masjid-care-server.onrender.com`,
});
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
