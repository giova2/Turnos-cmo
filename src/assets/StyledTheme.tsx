import { DefaultTheme } from "styled-components";

const myTheme: DefaultTheme = {
  //   borderRadius: '5px',
  fonts: {
    main: "Gill-Sans",
    secondary: "Montserrat",
  },
  fontSize: {
    main: "3rem",
    secondary: "1rem",
    mobile: "2rem",
  },
  colors: {
    main: "#ffffff",
    secondary: "#334ac8",
    info: "#000001",
  },
  backgroundColors: {
    main: "#264afb",
    mainLight: "#516efb",
    secondary: "#162c96",
    info: "#f6ee0d",
  },
  header: {
    height: "20vh",
  },
  menu: {
    height: "80vh",
  },
  customValues: {
    appBar: {
      height: {
        mobile: "48px",
        desktop: "64px",
      },
    },
    delayPageTransitions: "200ms",
  },
};

export default myTheme;
