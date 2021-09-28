import React from "react";

import HomeIcon from "@mui/icons-material/Home";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

export const navbarData = [
  {
    to: "/",
    title: "Home",
    icon: <HomeIcon fontSize="large" sx={{ color: "#6d4c41" }} />,
  },
  {
    to: "/currencies",
    title: "Currencies",
    icon: <MonetizationOnIcon fontSize="large" sx={{ color: "#00cc66" }} />,
  },
  {
    to: "/exchanges",
    title: "Exchanges",
    icon: <SwapHorizIcon fontSize="large" sx={{ color: "#1976d2" }} />,
  },
  {
    to: "/news",
    title: "News",
    icon: <AnnouncementIcon fontSize="large" sx={{ color: "#ba000d" }} />,
  },
];
