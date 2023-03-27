import { createTheme } from "@mui/material/styles";

// UI
const bodyFont = `"Lato", sans-serif`;
const headerFont = `"Montserrat", sans-serif`;

const mainColor = "#1976D2";

const theme = createTheme({
  typography: {
    fontFamily: bodyFont,
    // Nav
    navHeader: {
      fontSize: "26px",
      fontWeight: 400,
      fontFamily: headerFont,
      fontStyle: "italic",
    },
    navSignIn: {
      fontSize: "16px",
      fontWeight: 400,
      fontFamily: headerFont,
      "&:hover": {
        cursor: "pointer",
      },
    },
    hero: {
      fontSize: "85px",
      letterSpacing: "5px",
      fontWeight: 400,
      fontFamily: headerFont,
      color: "white",
      textShadow: "2px 0px black",
    },
    heroTextHeading: {
      fontFamily: headerFont,
      // fontStyle: "italic",
      fontWeight: 600,
      fontSize: "60px",
      transition: "all 0.5s",
      color: mainColor,
    },
    heroText: {
      fontFamily: headerFont,
      fontStyle: "italic",
      fontWeight: 400,
      fontSize: "35px",
      transition: "all 0.5s",
      color: mainColor,
    },

    body: {
      fontFamily: bodyFont,
      fontSize: "26px",
    },
  },
});

export default theme;
