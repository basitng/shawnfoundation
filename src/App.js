import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import _NavBar from "./components/NavBar";
import HomePage from "./pages/Home";
import { Fab } from "@mui/material";
import { ColorizeOutlined } from "@mui/icons-material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DonatePage from "./pages/Donate";
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        light: "#81c784",
        main: "#66bb6a",
        dark: "#388e3c",
      },
      secondary: {
        main: "#ffa726",
      },
    },
    typography: {
      fontFamily: "poppins",
    },
  });
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/donate" element={<DonatePage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
