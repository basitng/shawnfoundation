import React from "react";
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
import {
  CallOutlined,
  CardGiftcardOutlined,
  Language,
  Menu,
} from "@mui/icons-material";

export default function _NavBar() {
  const routes = [
    { name: "Home", path: "/", id: Math.random() * 10000 },
    { name: "About us", path: "/about", id: Math.random() * 10000 },
    { name: "Projects", path: "/project", id: Math.random() * 10000 },
    { name: "Gallery", path: "/gallery", id: Math.random() * 10000 },
  ];
  const actionRoutes = [
    { name: "Contact Us", path: "/contact", id: Math.random() * 10000 },
    { name: "Donate", path: "/donate", id: Math.random() * 10000 },
  ];
  return (
    <AppBar position="fixed" elevation={1} className="AppBar">
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
          <IconButton>
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}
