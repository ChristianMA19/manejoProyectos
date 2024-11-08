import { PasswordInput } from "@/components/ui/password-input";
import { Image, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import logo from "@/assets/images/logo-vivienda-2024.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/utils/supabase";
import { Toaster, toaster } from "@/components/ui/toaster";

const Authentication: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: username,
        password: password,
      });

      if (error) {
        toaster.create({
          title: "Error al iniciar sesión",
          description:
            "Por favor, verifica tus credenciales e intenta de nuevo.",
          type: "error",
          duration: 2000,
        });
        return;
      }

      // Navigate to home if authentication is successful
      navigate("/home");
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  // Handle Enter key press event for login
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div
      className="flex w-full h-screen justify-center items-center bg-[#AB886D]"
      onKeyDown={handleKeyPress} // Attach the keydown event to the container
    >
      <div className="flex flex-col items-center bg-[#E4E0E1] w-full sm:w-[70vw] md:w-[50vw] lg:w-[20vw] h-[70vh] rounded-2xl justify-between py-8 gap-4 mx-4">
        <Image src={logo} alt="logo" maxWidth="80%" />
        <div className="flex flex-col w-[80%] items-center gap-4">
          <Input
            placeholder="Username"
            className="text-black outline-black outline-double"
            variant="outline"
            background="white"
            width="100%"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <PasswordInput
            placeholder="Password"
            className="text-black outline-black outline-double"
            variant="outline"
            size="md"
            background="white"
            width="100%"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mb-5 bg-black w-[80%] text-lg p-2 rounded-2xl text-white"
          onClick={handleLogin}>
          Ingresar
        </motion.button>
        <Toaster />
      </div>
    </div>
  );
};

export default Authentication;
