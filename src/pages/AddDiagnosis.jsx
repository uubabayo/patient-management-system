import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { mockPatients } from "../utils/mockData";

function AddDiagnosis() {
  const navigate = useNavigate();

  const [patients] = useState(mockPatients);
  const [selectedPatient, setSelectedPatient] = useState("");
  const [diagnosisData, setDiagnosisData] = useState({
    diagnosis: "",
    symptoms: "",
    treatment: "",
    medications: "",
    notes: "",
    followUpDate: "",
  });
  const [message, setMessage] = useState("");

  const handlePatientChange = (e) => {
    setSelectedPatient(e.target.value);
  };

  const handleDiagnosisChange = (e) => {
    setDiagnosisData({
      ...diagnosisData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedPatient) {
      setMessage("Please select a patient");
      return;
    }

    if (!diagnosisData.diagnosis) {
      setMessage("Please enter a diagnosis");
      return;
    }

    // Find the selected patient
    const patient = patients.find((p) => p.id === parseInt(selectedPatient));

    if (patient) {
      setMessage(
        `Diagnosis recorded for ${patient.firstName} ${patient.lastName}!`
      );

      // Clear form
      setSelectedPatient("");
      setDiagnosisData({
        diagnosis: "",
        symptoms: "",
        treatment: "",
        medications: "",
        notes: "",
        followUpDate: "",
      });
    }
  };

  const handleBack = () => {
    navigate("/doctor");
  };

  return (
    <Layout>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="mb-0">Patient Diagnosis</h3>
              <button className="btn btn-secondary" onClick={handleBack}>
                Back to Dashboard
              </button>
            </div>

            {message && (
              <div
                className={`alert ${
                  message.includes("recorded")
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

                  {/* Diagnosis Details */}
                  <div className="row g-3">
                    <div className="col-12">
                      <label className="form-label">Diagnosis *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="diagnosis"
                        value={diagnosisData.diagnosis}
                        onChange={handleDiagnosisChange}
                        placeholder="e.g., Hypertension, Diabetes, etc."
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label">Symptoms</label>
                      <textarea
                        className="form-control"
                        name="symptoms"
                        rows="3"
                        value={diagnosisData.symptoms}
                        onChange={handleDiagnosisChange}
                        placeholder="Describe the patient's symptoms..."
                      ></textarea>
                    </div>

                    <div className="col-12">
                      <label className="form-label">Treatment Plan</label>
                      <textarea
                        className="form-control"
                        name="treatment"
                        rows="3"
                        value={diagnosisData.treatment}
                        onChange={handleDiagnosisChange}
                        placeholder="Describe the recommended treatment..."
                      ></textarea>
                    </div>

                    <div className="col-12">
                      <label className="form-label">
                        Medications Prescribed
                      </label>
                      <textarea
                        className="form-control"
                        name="medications"
                        rows="2"
                        value={diagnosisData.medications}
                        onChange={handleDiagnosisChange}
                        placeholder="List prescribed medications with dosage..."
                      ></textarea>
                    </div>

                    <div className="col-12">
                      <label className="form-label">Doctor's Notes</label>
                      <textarea
                        className="form-control"
                        name="notes"
                        rows="3"
                        value={diagnosisData.notes}
                        onChange={handleDiagnosisChange}
                        placeholder="Additional observations and recommendations..."
                      ></textarea>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Follow-up Date</label>
                      <input
                        type="date"
                        className="form-control"
                        name="followUpDate"
                        value={diagnosisData.followUpDate}
                        onChange={handleDiagnosisChange}
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <button type="submit" className="btn btn-success me-2">
                      Save Diagnosis
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={() => {
                        setSelectedPatient("");
                        setDiagnosisData({
                          diagnosis: "",
                          symptoms: "",
                          treatment: "",
                          medications: "",
                          notes: "",
                          followUpDate: "",
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

export default AddDiagnosis;
