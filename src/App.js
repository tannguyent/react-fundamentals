import { useEffect } from "react";
import AppRouter from "./navigation/AppRouter";
import LogsContainer from "./components/Log";

import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./theme";

import Header from "./components/Header";

import "./utils/iconFont";

const App = () => {
  
  useEffect(() => {
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <AppRouter />
      <LogsContainer />
    </ThemeProvider>
  );
}

export default App;
