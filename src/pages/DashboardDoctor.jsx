import Layout from "../components/Layout";

function DashboardDoctor() {
  return (
    <Layout>
      <h3 className="mb-4">Doctor Dashboard</h3>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">View Patients</h5>
              <p className="card-text">Access list of registered patients.</p>
              <button className="btn btn-primary w-100">Open</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Record Diagnosis</h5>
              <p className="card-text">Add new diagnostic entries.</p>
              <button className="btn btn-primary w-100">Open</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">View History</h5>
              <p className="card-text">Review previous notes and summaries.</p>
              <button className="btn btn-primary w-100">Open</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default DashboardDoctor;
