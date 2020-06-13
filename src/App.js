import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import theme from "./theme/muiTheme";
import { ThemeProvider } from "@material-ui/styles";
import { Body } from "./components/Body";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

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
