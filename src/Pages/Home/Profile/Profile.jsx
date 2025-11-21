import React from "react";

const profiles = [
  {
    name: "Imam Ahmed",
    role: "Imam",
    joinDate: "Jan 2015",
    image: "../../../../src/assets/b2.jpg",
  },
  {
    name: "Moazzin Karim",
    role: "Moazzin",
    joinDate: "Mar 2018",
    image: "../../../src/assets/b1.jpg",
  },
  {
    name: "Imam Rahman",
    role: "Imam",
    joinDate: "Jul 2020",
    image: "../../../sec/assets/b3.jpg",
  },
];

export default function Profile() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Team</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
            >
              <img
                src={profile.image}
                alt={profile.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold">{profile.name}</h3>
                <p className="text-gray-500">{profile.role}</p>
                <p className="text-gray-400 text-sm">
                  Joined: {profile.joinDate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
