import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { mockPatients } from "../utils/mockData";

function RecordVitals() {
  const navigate = useNavigate();

  // Use the mock data from central file
  const [patients] = useState(mockPatients);

  const [selectedPatient, setSelectedPatient] = useState("");
  const [vitals, setVitals] = useState({
    temperature: "",
    bloodPressure: "",
    pulse: "",
    respiration: "",
    oxygenSaturation: "",
  });
  const [message, setMessage] = useState("");

  const handlePatientChange = (e) => {
    setSelectedPatient(e.target.value);
  };

  const handleVitalChange = (e) => {
    setVitals({
      ...vitals,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedPatient) {
      setMessage("Please select a patient");
      return;
    }

    // Find the selected patient
    const patient = patients.find((p) => p.id === parseInt(selectedPatient));

    if (patient) {
      setMessage(
        `Vitals recorded successfully for ${patient.firstName} ${patient.lastName}!`
      );

      // Clear form
      setSelectedPatient("");
      setVitals({
        temperature: "",
        bloodPressure: "",
        pulse: "",
        respiration: "",
        oxygenSaturation: "",
      });
    }
  };

  const handleBack = () => {
    navigate("/nurse");
  };

  return (
    <Layout>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="mb-0">Record Vital Signs</h3>
              <button className="btn btn-secondary" onClick={handleBack}>
                Back to Dashboard
              </button>
            </div>

            {message && (
              <div
                className={`alert ${
                  message.includes("successfully")
                    ? "alert-success"
                    : "alert-danger"
                }`}
              >
                {message}
              </div>
            )}

            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  {/* Patient Selection */}
                  <div className="mb-4">
                    <label className="form-label">Select Patient *</label>
                    <select
                      className="form-select"
                      value={selectedPatient}
                      onChange={handlePatientChange}
                    >
                      <option value="">Choose a patient...</option>
                      {patients.map((patient) => (
                        <option key={patient.id} value={patient.id}>
                          {patient.firstName} {patient.lastName}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Vital Signs Form */}
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Temperature ('C)</label>
                      <input
                        type="number"
                        step="0.1"
                        className="form-control"
                        name="temperature"
                        value={vitals.temperature}
                        onChange={handleVitalChange}
                        placeholder="e.g., 36.5"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Blood Pressure</label>
                      <input
                        type="text"
                        className="form-control"
                        name="bloodPressure"
                        value={vitals.bloodPressure}
                        onChange={handleVitalChange}
                        placeholder="e.g., 120/80"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Pulse (BPM)</label>
                      <input
                        type="number"
                        className="form-control"
                        name="pulse"
                        value={vitals.pulse}
                        onChange={handleVitalChange}
                        placeholder="e.g., 72"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">
                        Respiration (Breaths/min)
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        name="respiration"
                        value={vitals.respiration}
                        onChange={handleVitalChange}
                        placeholder="e.g., 16"
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label">
                        Oxygen Saturation (%)
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        name="oxygenSaturation"
                        value={vitals.oxygenSaturation}
                        onChange={handleVitalChange}
                        placeholder="e.g., 98"
                        min="0"
                        max="100"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <button type="submit" className="btn btn-primary me-2">
                      Record Vitals
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={() => {
                        setSelectedPatient("");
                        setVitals({
                          temperature: "",
                          bloodPressure: "",
                          pulse: "",
                          respiration: "",
                          oxygenSaturation: "",
                        });
                        setMessage("");
                      }}
                    >
                      Clear Form
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="mt-3 text-muted">
              <small>* Required fields</small>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default RecordVitals;
