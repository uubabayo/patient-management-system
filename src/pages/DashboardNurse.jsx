import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

function DashboardNurse() {
  const navigate = useNavigate();

  return (
    <Layout>
      <h3 className="text-center mb-4">Nurse Dashboard</h3>

      <div className="row justify-content-center g-4">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Record Vital Signs</h5>
              <p className="card-text">Take and record patient vitals</p>
              <button
                className="btn btn-primary w-100"
                onClick={() => navigate("/record-vitals")}
              >
                Open Vitals Form
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Medication Notes</h5>
              <p className="card-text">Record medication administration</p>
              <button
                className="btn btn-success w-100"
                onClick={() => navigate("/medication-notes")}
              >
                Add Notes
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">View Patients</h5>
              <p className="card-text">Check patient list and details</p>
              <button
                className="btn btn-info w-100"
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

export default DashboardNurse;
