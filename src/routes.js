import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { HomeScreen, ProjectsScreen } from "./screens";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route exact path="/projects" element={<ProjectsScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
