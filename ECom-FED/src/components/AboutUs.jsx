import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-10">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-3xl w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-pink-600">
          About Us
        </h1>

        <p className="text-gray-700 mb-6 text-center">
          Welcome to the <strong>Product Management System</strong> — a simple and effective tool to manage products, users, and inventory with ease.
        </p>

        <h2 className="text-2xl font-semibold mb-3 text-gray-800">Our Mission</h2>
        <p className="text-gray-700 mb-6">
          Our mission is to simplify product and inventory management using an intuitive role-based system for both administrators and users.
        </p>

        <h2 className="text-2xl font-semibold mb-3 text-gray-800">Features</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Role-based access for Admin and User</li>
          <li>Secure authentication and login</li>
          <li>Easy product management with image and price details</li>
          <li>Inventory tracking and user management tools</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
