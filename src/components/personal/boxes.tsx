import React from "react";
import casa from "../../assets/images/casa.jpg";
import { Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Boxes: React.FC = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex flex-col bg-gray-500 m-4 w-64 h-64 rounded-xl cursor-pointer">
      <div>
        <Image src={casa} alt="casa" className="rounded" />
      </div>
      <div className="flex flex-col">
        <p className="flex items-center justify-center">Casa uno</p>
        <div className="flex flex-row items-center justify-center ">
          <div className="w-3/5 text-sm">
            <p className="flex ">Inicio : 2024-02-18</p>
            <p className="flex ">Final : 2024-06-18</p>
          </div>
          <div className="h-full w-[1px] bg-black mx-3"></div>
          <div className="w-3/5 text-sm">
            <p> personas trabajando: 2</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Boxes;
