import React from "react";
import FormTurnos from "./components/FormTurnos";
import SocialIcons from "./components/SocialIcons";
import StyledContainer from "./assets/StyledContainer";
import { ThemeProvider } from "styled-components";
import theme from "./assets/StyledTheme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledContainer>
        <SocialIcons />
        <FormTurnos />
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
