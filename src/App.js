import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import theme from "./theme/muiTheme";
import { ThemeProvider } from "@material-ui/styles";
import { Body } from "./components/Body";

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Header />
        <Body />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
