import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

function DashboardDoctor() {
  const navigate = useNavigate();

  return (
    <Layout>
      <h3 className="text-center mb-4">Doctor Dashboard</h3>

      <div className="row justify-content-center g-4">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">View Patients</h5>
              <p className="card-text">
                Check patient list and medical details
              </p>
              <button
                className="btn btn-primary w-100"
                onClick={() => navigate("/patient-list")}
              >
                Patient List
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Add Diagnosis</h5>
              <p className="card-text">
                Record patient diagnosis and treatment
              </p>
              <button
                className="btn btn-success w-100"
                onClick={() => navigate("/add-diagnosis")}
              >
                New Diagnosis
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Medical History</h5>
              <p className="card-text">Review patient medical records</p>
              <button
                className="btn btn-info w-100"
                onClick={() => navigate("/medical-history")}
              >
                View History
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default DashboardDoctor;
