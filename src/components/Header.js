import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = ({ isSignedIn }) => {
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute flex justify-between w-full px-8 py-2 bg-gradient-to-b from-black z-10">
      <img
        className="w-64"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      <p className="flex justify-end items-center ">{user?.displayName}</p>
      {user && (
        <button
          onClick={handleSignOut}
          className="my-8 bg-red-600 font-bold text-white border border-gray-50 p-2 rounded-lg "
        >
          Sign Out
        </button>
      )}
    </div>
  );
};

export default Header;
