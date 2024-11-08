// src/components/layouts/MainLayout.tsx
import React from "react";
import NavBar from "@/components/personal/NavBar";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="m-12">{children}</div>
    </>
  );
};

export default MainLayout;
