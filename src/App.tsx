import React,{useEffect} from "react";
import FormTurnos from "./components/FormTurnos";
import { StyledContainer, StyledLayoutCargando} from "./assets/StyledContainer";
import { ThemeProvider } from "styled-components";
import { LogoIcon } from './assets/Icons';
import theme from "./assets/StyledTheme";

function App() {
  const [cargado, setCargado] = React.useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setCargado(true);  
    }, 1500);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <StyledLayoutCargando cargado={cargado} >
      {/* <StyledLayoutCargando> */}
        <div className="flex flex-col justify-center items-center">
          <h1 style={{fontSize:"20vmin", marginBottom:"-1.5rem"}}>CMO</h1>
          <p style={{fontSize:"8vmin"}}>TURNOS</p>
          <LogoIcon className="-my-10" size="50vmin"/>
        </div>
      </StyledLayoutCargando>
      <StyledContainer cargado={cargado}>
        <FormTurnos />
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
