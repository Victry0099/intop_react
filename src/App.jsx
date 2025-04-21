import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Home from "./Pages/Home";
import Loading from "./Components/Loading";
import AdminDashboard from "./Pages/AdminDashboard";
import NotFound from "./Pages/NotFound";
import AdminVerification from "./Pages/AdminVerification";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminVerification />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="*" element={<NotFound />} />

          {/* Add more routes as needed */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
