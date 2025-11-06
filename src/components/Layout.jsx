// src/components/Layout.jsx
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/Sidebar";
import { Box } from "@mui/material";

function Layout() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Box sx={{ minHeight: "100vh"}}>
      <Header onOpenMenu={() => setOpenMenu(true)} />
      <SideBar open={openMenu} onClose={() => setOpenMenu(false)} />

      <Box
        component="main"
        sx={{
          minHeight: {
            xs: "calc(100vh - 57px)",
            sm:"calc(100vh - 65px)",
            md: "calc(100vh - 65px)",
          },
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
