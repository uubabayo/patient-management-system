import Layout from "../components/Layout";

function DashboardRecord() {
  return (
    <Layout>
      <h3 className="mb-4">Health Record Dashboard</h3>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Register New Patient</h5>
              <p className="card-text">Add patient demographics.</p>
              <button className="btn btn-primary w-100">Open</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Update Records</h5>
              <p className="card-text">Edit or modify patient data.</p>
              <button className="btn btn-primary w-100">Open</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default DashboardRecord;
