import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { mockPatients } from "../utils/mockData";

function UpdateRecords() {
  const navigate = useNavigate();

  // Use the mock data from central file
  const [patients] = useState(mockPatients);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [message, setMessage] = useState("");

  // Filter patients based on search
  const filteredPatients = patients.filter(
    (patient) =>
      patient.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.phone.includes(searchTerm)
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setSelectedPatient(null);
  };

  const handleSelectPatient = (patient) => {
    setSelectedPatient(patient);
    setSearchTerm("");
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (selectedPatient) {
      setMessage(
        `Patient ${selectedPatient.firstName} ${selectedPatient.lastName} updated successfully!`
      );
    }
  };

  const handleBack = () => {
    navigate("/record");
  };

  return (
    <Layout>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="mb-0">Update Patient Records</h3>
              <button className="btn btn-secondary" onClick={handleBack}>
                Back to Dashboard
              </button>
            </div>

            {/* Search Section */}
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Find Patient</h5>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by name or phone number..."
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
              </div>
            </div>

            {/* Update Form Section */}
            {selectedPatient && (
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    Update: {selectedPatient.firstName}{" "}
                    {selectedPatient.lastName}
                  </h5>

                  {message && (
                    <div className="alert alert-success">{message}</div>
                  )}

                  <form onSubmit={handleUpdate}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label">First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={selectedPatient.firstName}
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label">Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={selectedPatient.lastName}
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label">Phone Number</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={selectedPatient.phone}
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label">Date of Birth</label>
                        <input
                          type="date"
                          className="form-control"
                          defaultValue={selectedPatient.dateOfBirth}
                        />
                      </div>

                      <div className="col-12">
                        <label className="form-label">Address</label>
                        <textarea
                          className="form-control"
                          rows="3"
                          defaultValue={selectedPatient.address}
                        ></textarea>
                      </div>
                    </div>

                    <div className="mt-4">
                      <button type="submit" className="btn btn-primary me-2">
                        Update Patient
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => setSelectedPatient(null)}
                      >
                        Select Different Patient
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {!selectedPatient && !searchTerm && (
              <div className="text-center text-muted">
                <p>Search for a patient to update their records</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default UpdateRecords;
