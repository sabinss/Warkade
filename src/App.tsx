import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing";

//context
import { Provider as AuthProvider } from "./context/authContext";
import { Collections } from "./pages/Collection";

function WarKade() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/collections" element={<Collections/>}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default WarKade;
