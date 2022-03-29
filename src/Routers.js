import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Configuracao from "./pages/Configuracao";
import Sobre from "./pages/Sobre";
import Orcamento from "./pages/Orcamentos";

export default () => {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <>
            <Home />
          </>
        }
      />

      <Route
        exact
        path="/config"
        element={
          <>
            <Configuracao />
          </>
        }
      />

      <Route
        exact
        path="/sobre"
        element={
          <>
            <Sobre />
          </>
        }
      />

      <Route
        exact
        path="/orcamento-produtos"
        element={
          <>
            <Orcamento />
          </>
        }
      />
    </Routes>
  );
};
