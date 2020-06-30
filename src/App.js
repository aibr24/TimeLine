import React from "react";
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";
import EventList from "./components/ListComponent";
import "./App.css";
const theme = {
  mainColor: "#1f2833",
  headerTextColor: "#66FCF1",
  descriptiveTextColor: "#c5c6c7",
  borderColor: "#45a29e",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <EventList />
    </ThemeProvider>
  );
}

export default App;
