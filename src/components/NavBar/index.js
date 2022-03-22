import React, { useState } from "react";
import {
  AppBar,
  Button,
  Hidden,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Logo from "../../assets/images/Logo2.svg";
import _SideBar from "./SideBar";
import {
  CallOutlined,
  CardGiftcardOutlined,
  Language,
  Menu,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function _NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleOpen = () => setMenuOpen(true);
  const routes = [
    { name: "Home", path: "/", id: Math.random() * 10000 },
    { name: "About us", path: "#about", id: Math.random() * 10000 },
    { name: "Dreams", path: "#dreams", id: Math.random() * 10000 },
    { name: "Gallery", path: "#gallery", id: Math.random() * 10000 },
  ];
  const actionRoutes = [
    { name: "Contact Us", path: "#contact", id: Math.random() * 10000 },
    { name: "Donate", path: "/donate", id: Math.random() * 10000 },
  ];
  console.log(menuOpen);
  return (
    <AppBar position="fixed" elevation={1} className="AppBar">
      <_SideBar menuState={menuOpen} setMenuState={setMenuOpen} />
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <img
            style={{ width: 300, paddingTop: 4, objectFit: "contain" }}
            src={Logo}
          />
        </Box>
        <Hidden smDown>
          <Box sx={{ display: "flex", flexDirection: "row", ml: 5 }}>
            {routes.map((route) => (
              <Typography
                sx={{ margin: 2, cursor: "pointer" }}
                className="hover-to-green"
                component={Link}
                to={route.path}
              >
                {route.name}
              </Typography>
            ))}
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Tooltip title="Language" color="secondary">
              <IconButton>
                <Language sx={{ color: "#2d3748" }} />
              </IconButton>
            </Tooltip>
            {actionRoutes.map((route) => (
              <Button
                component={Link}
                to={route.path}
                variant={route.path === "/donate" ? "contained" : "outlined"}
                sx={{ marginRight: 2, cursor: "pointer" }}
                startIcon={
                  route.path === "/donate" ? (
                    <CardGiftcardOutlined />
                  ) : (
                    <CallOutlined color="primary" />
                  )
                }
              >
                {route.name}
              </Button>
            ))}
          </Box>
        </Hidden>
        <Hidden smUp>
          <IconButton size={"large"} onClick={handleOpen}>
            <Menu sx={{ fontSize: 30 }} />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}
