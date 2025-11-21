// import React from "react";
// import useAuth from "../hooks/useAuth";
// import { Navigate, useLocation } from "react-router";

// import Loading from "../hooks/Loading";

// const PrivateRouts = ({ children }) => {
//   const { user, loading } = useAuth();
//   const location = useLocation();
//   console.log(location);

//   console.log(user);
//   if (loading) {
//     return;
//     <Loading></Loading>;
//   }
//   if (user && user.email) {
//     return children;
//   }
//   return <Navigate to="/auth/login"></Navigate>;
// };
// export default PrivateRouts;
import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router";
import Loading from "../hooks/Loading";

const PrivateRouts = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (user && user.email) {
    return children;
  }

  return <Navigate to="/auth/login" state={location.pathname} replace />;
};

export default PrivateRouts;
