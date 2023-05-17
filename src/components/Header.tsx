import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
const Header: React.FC = () => {
  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "#ffaa00" }}>
        <Toolbar>
          <TipsAndUpdatesIcon sx={{ width: 50, height: 60 }} />
          <Typography variant="h4" sx={{ fontWeight: 800, padding: "19px" }}>
            Keep Notes
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
