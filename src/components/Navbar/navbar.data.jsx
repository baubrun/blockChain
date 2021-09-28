import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

export const navbarData = [
  {
    title: "Home",
    icon: <HomeIcon fontSize="large" />,
  },
  {
    title: "Currencies",
    icon: <MonetizationOnOutlinedIcon fontSize="large" />,
  },
  {
    title: "Exchanges",
    icon: <SwapHorizIcon fontSize="large" />,
  },
  {
    title: "News",
    icon: <AnnouncementIcon fontSize="large" />,
  },
];
