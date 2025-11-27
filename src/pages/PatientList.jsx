import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { mockPatients } from "../utils/mockData";

function PatientList() {
  const navigate = useNavigate();

  // Use the mock data from central file
  const [patients] = useState(mockPatients);

  const handleBack = () => {
    navigate("/record");
  };

  const handleAddNew = () => {
    navigate("/register-patient");
  };

  return (
    <Layout>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="mb-0">Patient List</h3>
              <div className="d-flex gap-2">
                <button className="btn btn-success" onClick={handleAddNew}>
                  Add New Patient
                </button>
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
