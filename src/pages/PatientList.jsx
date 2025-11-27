import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { mockPatients } from "../utils/mockData";
import { AuthContext } from "../context/AuthContext";

function PatientList() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [patients] = useState(mockPatients);

  const handleBack = () => {
    // Go back to the appropriate dashboard based on role
    if (user?.role === "nurse") navigate("/nurse");
    else if (user?.role === "doctor") navigate("/doctor");
    else navigate("/record");
  };

  // Only show "Add New Patient" for health record staff
  const showAddButton = user?.role === "record";

  return (
    <Layout>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="mb-0">Patient List</h3>
              <div className="d-flex gap-2">
                {showAddButton && (
                  <button
                    className="btn btn-success"
                    onClick={() => navigate("/register-patient")}
                  >
                    Add New Patient
                  </button>
                )}
                <button className="btn btn-secondary" onClick={handleBack}>
                  Back to Dashboard
                </button>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                {patients.length === 0 ? (
                  <p className="text-center text-muted">No patients found.</p>
                ) : (
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Phone</th>
                          <th>Gender</th>
                          <th>Date of Birth</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {patients.map((patient) => (
                          <tr key={patient.id}>
                            <td>{patient.id}</td>
                            <td>{patient.firstName}</td>
                            <td>{patient.lastName}</td>
                            <td>{patient.phone}</td>
                            <td>{patient.gender}</td>
                            <td>{patient.dateOfBirth}</td>
                            <td>
                              <button className="btn btn-sm btn-outline-primary">
                                View
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-3 text-muted text-center">
              <small>Showing {patients.length} patients</small>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default PatientList;
