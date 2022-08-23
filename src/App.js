import React, { Fragment } from "react";
import GlobalStyle from "./GlobalStyle";
// import { BrowserRouter, Routes, Route } from "react-router-dom";


import Header from "./components/Header";
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Section from "./components/Section";


function App() {
  return (
      <Fragment>
          <GlobalStyle />
          <Header />
          <Navbar />
          <Main />
          <Section />
      </Fragment>
  );
}

export default App;
