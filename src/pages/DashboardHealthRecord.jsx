import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

function DashboardRecord() {
  const navigate = useNavigate();

  return (
    <Layout>
      <h3 className="mb-4">Health Record Dashboard</h3>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Register New Patient</h5>
              <p className="card-text">Add patient demographics.</p>
              <button
                className="btn btn-primary w-100"
                onClick={() => navigate("/register-patient")}
              >
                Register Patient
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Update Records</h5>
              <p className="card-text">Edit or modify patient data.</p>
              <button
                className="btn btn-primary w-100"
                onClick={() => navigate("/update-records")}
              >
                Update Data
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body text-center">
              <h5>View Patient List</h5>
              <p>See all registered patients</p>
              <button
                className="btn btn-primary w-100"
                onClick={() => navigate("/patient-list")}
              >
                View Patient List
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default DashboardRecord;
