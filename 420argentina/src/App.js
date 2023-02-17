import React, { Component } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "./Components/Navigator/Layout.js";
import Home from "./Pages/Home.js";
import Docs from "./Pages/Docs.js";

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Documentos" element={<Docs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
