import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { mockPatients } from "../utils/mockData";

function MedicationNotes() {
  const navigate = useNavigate();

  const [patients] = useState(mockPatients);
  const [selectedPatient, setSelectedPatient] = useState("");
  const [medicationData, setMedicationData] = useState({
    medicationName: "",
    dosage: "",
    frequency: "",
    route: "",
    notes: "",
    administeredAt: "",
  });
  const [message, setMessage] = useState("");

  const handlePatientChange = (e) => {
    setSelectedPatient(e.target.value);
  };

  const handleMedicationChange = (e) => {
    setMedicationData({
      ...medicationData,
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
        `Medication notes recorded for ${patient.firstName} ${patient.lastName}!`
      );

      // Clear form
      setSelectedPatient("");
      setMedicationData({
        medicationName: "",
        dosage: "",
        frequency: "",
        route: "",
        notes: "",
        administeredAt: "",
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
              <h3 className="mb-0">Medication Administration Notes</h3>
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

                  {/* Medication Details */}
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Medication Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="medicationName"
                        value={medicationData.medicationName}
                        onChange={handleMedicationChange}
                        placeholder="e.g., Paracetamol"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Dosage *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="dosage"
                        value={medicationData.dosage}
                        onChange={handleMedicationChange}
                        placeholder="e.g., 500mg"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Frequency *</label>
                      <select
                        className="form-select"
                        name="frequency"
                        value={medicationData.frequency}
                        onChange={handleMedicationChange}
                      >
                        <option value="">Select frequency...</option>
                        <option value="Once daily">Once daily</option>
                        <option value="Twice daily">Twice daily</option>
                        <option value="Three times daily">
                          Three times daily
                        </option>
                        <option value="Four times daily">
                          Four times daily
                        </option>
                        <option value="As needed">As needed</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Route *</label>
                      <select
                        className="form-select"
                        name="route"
                        value={medicationData.route}
                        onChange={handleMedicationChange}
                      >
                        <option value="">Select route...</option>
                        <option value="Oral">Oral</option>
                        <option value="IV">IV</option>
                        <option value="IM">IM</option>
                        <option value="Subcutaneous">Subcutaneous</option>
                        <option value="Topical">Topical</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Time Administered</label>
                      <input
                        type="datetime-local"
                        className="form-control"
                        name="administeredAt"
                        value={medicationData.administeredAt}
                        onChange={handleMedicationChange}
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label">Additional Notes</label>
                      <textarea
                        className="form-control"
                        name="notes"
                        rows="3"
                        value={medicationData.notes}
                        onChange={handleMedicationChange}
                        placeholder="Any observations, patient response, or special instructions..."
                      ></textarea>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button type="submit" className="btn btn-success me-2">
                      Record Medication
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={() => {
                        setSelectedPatient("");
                        setMedicationData({
                          medicationName: "",
                          dosage: "",
                          frequency: "",
                          route: "",
                          notes: "",
                          administeredAt: "",
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

export default MedicationNotes;
