import React from "react";
import { Navbar } from "../view/Navbar";
import { AppRoutes } from "../routes/AppRoutes";
import { Footer } from "../view/Footer";

export const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <AppRoutes />
      <Footer/>
    </div>
  );
};
