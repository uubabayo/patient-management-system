import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import DashboardDoctor from "./pages/DashboardDoctor";
import DashboardNurse from "./pages/DashboardNurse";
import DashboardRecord from "./pages/DashboardHealthRecord";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/doctor"
          element={
            <ProtectedRoute allowedRoles={["doctor"]}>
              <DashboardDoctor />
            </ProtectedRoute>
          }
        />

        <Route
          path="/nurse"
          element={
            <ProtectedRoute allowedRoles={["nurse"]}>
              <DashboardNurse />
            </ProtectedRoute>
          }
        />

        <Route
          path="/record"
          element={
            <ProtectedRoute allowedRoles={["record"]}>
              <DashboardRecord />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
