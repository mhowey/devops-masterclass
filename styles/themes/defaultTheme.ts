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
            color: "#B5DA68",
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
            fontSize: "1.25rem",
            fontWeight: 300,
            color: "#000",
            marginTop: "1em",
            maxWidth: "1000px",
            lineHeight: "1.6rem",
          },
        },
        {
          props: { variant: "body2" },
          style: {
            fontSize: "1.1rem",
            fontWeight: 300,
            color: "#000",
            marginTop: "1.2em",
            maxWidth: "1000px",
            lineHeight: "10px",
          },
        },
      ],
    },
  },
  palette: {
    primary: {
      main: "#ffffff",
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
