import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import {
  mockPatients,
  mockMedicalHistory,
  mockVitalsHistory,
} from "../utils/mockData";

function MedicalHistory() {
  const navigate = useNavigate();

  const [patients] = useState(mockPatients);
  const [selectedPatient, setSelectedPatient] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handlePatientChange = (e) => {
    setSelectedPatient(e.target.value);
    setSearchTerm("");
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredPatients = patients.filter(
    (patient) =>
      patient.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectPatient = (patient) => {
    setSelectedPatient(patient.id.toString());
    setSearchTerm("");
  };

  const handleBack = () => {
    navigate("/doctor");
  };

  const selectedPatientData = patients.find(
    (p) => p.id === parseInt(selectedPatient)
  );

  // Get patient-specific medical history and vitals
  const patientMedicalHistory = selectedPatient
    ? mockMedicalHistory[selectedPatient] || []
    : [];
  const patientVitalsHistory = selectedPatient
    ? mockVitalsHistory[selectedPatient] || []
    : [];

  return (
    <Layout>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="mb-0">Patient Medical History</h3>
              <button className="btn btn-secondary" onClick={handleBack}>
                Back to Dashboard
              </button>
            </div>

            {/* Patient Search/Selection */}
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Find Patient</h5>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search patient by name..."
                  value={searchTerm}
                  onChange={handleSearch}
                />

                {searchTerm && (
                  <div className="mt-3">
                    <h6>Search Results:</h6>
                    {filteredPatients.length === 0 ? (
                      <p className="text-muted">No patients found.</p>
                    ) : (
                      <div className="list-group">
                        {filteredPatients.map((patient) => (
                          <button
                            key={patient.id}
                            className="list-group-item list-group-item-action"
                            onClick={() => handleSelectPatient(patient)}
                          >
                            {patient.firstName} {patient.lastName} -{" "}
                            {patient.phone}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {!searchTerm && (
                  <select
                    className="form-select mt-3"
                    value={selectedPatient}
                    onChange={handlePatientChange}
                  >
                    <option value="">Or select from list...</option>
                    {patients.map((patient) => (
                      <option key={patient.id} value={patient.id}>
                        {patient.firstName} {patient.lastName}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            </div>

            {/* Medical History Display */}
            {selectedPatientData && (
              <div className="row g-4">
                {/* Patient Information */}
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header bg-primary text-white">
                      <h5 className="mb-0">
                        Patient: {selectedPatientData.firstName}{" "}
                        {selectedPatientData.lastName}
                      </h5>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-3">
                          <strong>Phone:</strong> {selectedPatientData.phone}
                        </div>
                        <div className="col-md-3">
                          <strong>Gender:</strong> {selectedPatientData.gender}
                        </div>
                        <div className="col-md-3">
                          <strong>Date of Birth:</strong>{" "}
                          {selectedPatientData.dateOfBirth}
                        </div>
                        <div className="col-md-3">
                          <strong>Age:</strong>{" "}
                          {new Date().getFullYear() -
                            new Date(
                              selectedPatientData.dateOfBirth
                            ).getFullYear()}{" "}
                          years
                        </div>
                        <div className="col-12 mt-2">
                          <strong>Address:</strong>{" "}
                          {selectedPatientData.address}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Diagnosis History */}
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header bg-info text-white">
                      <h5 className="mb-0">
                        Diagnosis History
                        <span className="badge bg-light text-dark ms-2">
                          {patientMedicalHistory.length}
                        </span>
                      </h5>
                    </div>
                    <div className="card-body">
                      {patientMedicalHistory.length === 0 ? (
                        <p className="text-muted">
                          No diagnosis history found for this patient.
                        </p>
                      ) : (
                        patientMedicalHistory.map((record) => (
                          <div
                            key={record.id}
                            className="border-bottom pb-3 mb-3"
                          >
                            <h6 className="text-primary">{record.diagnosis}</h6>
                            <p className="mb-1">
                              <small className="text-muted">
                                Date: {record.date} | Doctor: {record.doctor}
                              </small>
                            </p>
                            <p className="mb-1">
                              <strong>Symptoms:</strong> {record.symptoms}
                            </p>
                            <p className="mb-1">
                              <strong>Treatment:</strong> {record.treatment}
                            </p>
                            <p className="mb-1">
                              <strong>Medications:</strong> {record.medications}
                            </p>
                            <p className="mb-1">
                              <strong>Notes:</strong> {record.notes}
                            </p>
                            {record.followUpDate && (
                              <p className="mb-0">
                                <strong>Follow-up:</strong>{" "}
                                {record.followUpDate}
                              </p>
                            )}
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>

                {/* Vital Signs History */}
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header bg-success text-white">
                      <h5 className="mb-0">
                        Vital Signs History
                        <span className="badge bg-light text-dark ms-2">
                          {patientVitalsHistory.length}
                        </span>
                      </h5>
                    </div>
                    <div className="card-body">
                      {patientVitalsHistory.length === 0 ? (
                        <p className="text-muted">
                          No vital signs recorded for this patient.
                        </p>
                      ) : (
                        patientVitalsHistory.map((vital, index) => (
                          <div key={index} className="border-bottom pb-3 mb-3">
                            <h6 className="text-success">
                              Vitals from {vital.date}
                            </h6>
                            <div className="row small">
                              <div className="col-6">
                                <strong>Temperature:</strong>{" "}
                                {vital.temperature}
                              </div>
                              <div className="col-6">
                                <strong>Blood Pressure:</strong>{" "}
                                {vital.bloodPressure}
                              </div>
                              <div className="col-6">
                                <strong>Pulse:</strong> {vital.pulse}
                              </div>
                              <div className="col-6">
                                <strong>Respiration:</strong>{" "}
                                {vital.respiration}
                              </div>
                              <div className="col-6">
                                <strong>O2 Saturation:</strong>{" "}
                                {vital.oxygenSaturation}
                              </div>
                              <div className="col-6">
                                <small className="text-muted">
                                  By: {vital.nurse}
                                </small>
                              </div>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>

                {/* Summary Stats */}
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header bg-secondary text-white">
                      <h5 className="mb-0">Medical Summary</h5>
                    </div>
                    <div className="card-body">
                      <div className="row text-center">
                        <div className="col-md-4">
                          <h4 className="text-primary">
                            {patientMedicalHistory.length}
                          </h4>
                          <p className="mb-0">Diagnosis Records</p>
                        </div>
                        <div className="col-md-4">
                          <h4 className="text-success">
                            {patientVitalsHistory.length}
                          </h4>
                          <p className="mb-0">Vital Records</p>
                        </div>
                        <div className="col-md-4">
                          <h4 className="text-info">
                            {patientMedicalHistory.length > 0
                              ? patientMedicalHistory[0].doctor
                              : "No records"}
                          </h4>
                          <p className="mb-0">Primary Doctor</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {!selectedPatient && (
              <div className="text-center text-muted py-5">
                <h5>Select a patient to view medical history</h5>
                <p>Search for a patient by name or select from the dropdown</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default MedicalHistory;
