import { createTheme } from "@mui/material";

export const defaultTheme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: "h1" },
          style: {
            fontSize: "2.25rem",
            fontWeight: 700,
          },
        },
        {
          props: { variant: "h2" },
          style: {
            fontSize: "2rem",
            fontWeight: 600,
            color: "#B5DA68",
          },
        },
        {
          props: { variant: "h3" },
          style: {
            fontSize: "1.5rem",
            fontWeight: 500,
            color: "lightskyblue",
            marginTop: "1em",
          },
        },
        {
          props: { variant: "body1" },
          style: {
            fontSize: "1rem",
            fontWeight: 300,
            color: "#fff",
            marginTop: "1em",
          },
        },
      ],
    },
  },
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#ffffff",
    },
  },
  typography: {
    // htmlFontSize: 16,
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});
