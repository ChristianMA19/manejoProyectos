import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { FaSignOutAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";

const NavBar: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <nav className="bg-gray-800 p-3">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-col text-white text-lg font-bold">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `${
                  isActive ? "text-yellow-500" : "text-white"
                } flex flex-row items-center justify-center gap-2`
              }>
              <FaHome size={"1.5rem"} />
              Home
            </NavLink>
          </motion.div>
        </div>
        <div className="flex space-x-5">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "text-yellow-500" : "text-white"
              }>
              Proyectos
            </NavLink>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-yellow-500" : "text-white"
              }>
              Administrador
            </NavLink>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-yellow-500" : "text-white"
              }>
              Contact
            </NavLink>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-yellow-500" : "text-white"
              }
              onClick={signOut}>
              <FaSignOutAlt size={"1.5rem"} />
            </NavLink>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
