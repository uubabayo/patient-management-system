import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import DashboardDoctor from "./pages/DashboardDoctor";
import DashboardNurse from "./pages/DashboardNurse";
import DashboardRecord from "./pages/DashboardHealthRecord";
import ProtectedRoute from "./components/ProtectedRoute";
import RegisterPatient from "./pages/RegisterPatient";
import PatientList from "./pages/PatientList";
import UpdateRecords from "./pages/UpdateRecords";
import RecordVitals from "./pages/RecordVitals";
import MedicationNotes from "./pages/MedicationNotes";
import AddDiagnosis from "./pages/AddDiagnosis";
import MedicalHistory from "./pages/MedicalHistory";

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
        <Route
          path="/register-patient"
          element={
            <ProtectedRoute>
              <RegisterPatient />
            </ProtectedRoute>
          }
        />
        <Route
          path="/patient-list"
          element={
            <ProtectedRoute>
              <PatientList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/update-records"
          element={
            <ProtectedRoute>
              <UpdateRecords />
            </ProtectedRoute>
          }
        />
        <Route
          path="/record-vitals"
          element={
            <ProtectedRoute>
              <RecordVitals />
            </ProtectedRoute>
          }
        />
        <Route
          path="/medication-notes"
          element={
            <ProtectedRoute>
              <MedicationNotes />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-diagnosis"
          element={
            <ProtectedRoute>
              <AddDiagnosis />
            </ProtectedRoute>
          }
        />
        <Route
          path="/medical-history"
          element={
            <ProtectedRoute>
              <MedicalHistory />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
