import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
    poster: {
      fontSize: "clamp(2.6rem, 5vw, 3.7rem)",
      fontWeight: 800,
      lineHeight: 1.05,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          poster: "h1", 
        },
      },
    },
  },
});

export default theme;
