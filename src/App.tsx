import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing";

//context
import { Provider as AuthProvider } from "./context/authContext";

function WarKade() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default WarKade;
