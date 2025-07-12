import { useState } from "react";
import { Box } from "@mui/material";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./Home/Header";
import Footer from "./Home/Footer";
import MiddlePart from "./Home/MiddlePart";
import Login from "./Home/Login";
import Register from "./Home/Register";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const location = useLocation();

  const isAuthPage = location.pathname === "/register"; // add more if needed

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      {/* Only show layout components if NOT on auth routes */}
      {!isAuthPage && <Header onAvatarClick={() => setShowLogin(true)} />}
      {!isAuthPage && <MiddlePart />}
      {showLogin && !isAuthPage && (
        <Login onClose={() => setShowLogin(false)} name="YASH" />
      )}
      {!isAuthPage && <Footer />}

      <Routes>
        {/* <Route path="/" element={<MiddlePart />} /> */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </Box>
  );
}

export default App;
