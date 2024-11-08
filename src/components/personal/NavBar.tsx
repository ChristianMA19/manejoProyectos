import React from "react";
import { NavLink } from "react-router-dom";
import { ColorModeButton } from "../ui/color-mode";
import { useAuth } from "@/contexts/AuthContext";

const NavBar: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <nav className="bg-gray-800 p-3">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? "text-yellow-500" : "text-white"
            }>
            MyApp
          </NavLink>
          <ColorModeButton />
        </div>
        <div className="flex space-x-4">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? "text-yellow-500" : "text-white"
            }>
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-yellow-500" : "text-white"
            }>
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-yellow-500" : "text-white"
            }>
            Contact
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-yellow-500" : "text-white"
            }
            onClick={signOut}>
            Sign Outw
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
