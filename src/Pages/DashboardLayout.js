import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Pages/NavBar";
import SideBar from "../Pages/SideBar";
import { Box } from "@mui/material";

const DashboardLayout = () => {
  return (
    <>
      <NavBar />
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box sx={{ flexGrow: 1, p: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default DashboardLayout;
