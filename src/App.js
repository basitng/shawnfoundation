import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import _NavBar from "./components/NavBar";
import HomePage from "./pages/Home";
import { Fab } from "@mui/material";
import { ColorizeOutlined } from "@mui/icons-material";
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
        <_NavBar />
        <HomePage />
        <Fab
          sx={{ position: "fixed", bottom: "10%", right: "3%" }}
          variant="circular"
          color="secondary"
          aria-label="add"
        >
          <ColorizeOutlined sx={{}} />
        </Fab>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
