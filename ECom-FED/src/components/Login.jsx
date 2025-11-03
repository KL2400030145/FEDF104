import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-lg p-6 rounded-2xl w-96 text-center">
        {!user ? (
          <>
            <h2 className="text-xl font-bold mb-4">Login with Google</h2>
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                const decoded = jwtDecode(credentialResponse.credential);
                setUser(decoded);

                // ✅ Save to sessionStorage so other pages can use it
                sessionStorage.setItem("loggedInUser", JSON.stringify(decoded));

                console.log("Decoded User Info:", decoded);
                alert(`Welcome, ${decoded.name}!`);
                navigate("/dashboard");
              }}
              onError={() => {
                console.log("Login Failed");
                alert("Login failed. Try again!");
              }}
            />
          </>
        ) : (
          <div>
            <h2 className="text-xl font-bold">Welcome {user.name}</h2>
            <img
              src={user.picture}
              alt="profile"
              className="w-20 h-20 rounded-full mx-auto mt-2"
            />
            <p className="mt-2 text-gray-700">{user.email}</p>
            <button
              onClick={() => {
                setUser(null);
                sessionStorage.removeItem("loggedInUser");
              }}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
