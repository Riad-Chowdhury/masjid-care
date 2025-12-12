import React from "react";
import { useLoaderData } from "react-router";
import MyModal from "./MyModal";

const UserManagementDetails = () => {
  // --- Dummy User Data ----
  const user = useLoaderData();

  return (
    <div className="p-6">
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <div className="border p-4 rounded-xl shadow-md bg-white ">
          <img
            src={user.image}
            alt=""
            className="w-20 h-20 mx-auto rounded-full mb-2"
          />
          <h3 className="text-lg font-bold text-center">{user.name}</h3>

          <div className="mt-3 space-y-1 text-center">
            <p>
              <strong>Number:</strong> {user.number}
            </p>
            <p>
              <strong>Monthly Fee:</strong> {user.defaultFee} টাকা
            </p>
          </div>

          <div className="flex justify-center mt-4">
            <button>
              <MyModal user={user}> </MyModal>
            </button>
          </div>
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-4 text-center">
        User Management Details (Dummy Data)
      </h1>
      {/* Table View */}
      <div className="overflow-x-auto">
        <table className="table w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th>Image</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Village</th>
              <th>Monthly Fee</th>
              <th>Paid Months</th>
            </tr>
          </thead>

          <tbody></tbody>
        </table>
      </div>
      {/* Card View */}
    </div>
  );
};

export default UserManagementDetails;
