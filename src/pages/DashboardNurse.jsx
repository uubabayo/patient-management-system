import Layout from "../components/Layout";

function DashboardNurse() {
  return (
    <Layout>
      <h3 className="mb-4">Nurse Dashboard</h3>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Record Vital Signs</h5>
              <p className="card-text">Enter patient vitals.</p>
              <button className="btn btn-primary w-100">Open</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Medication Notes</h5>
              <p className="card-text">Add nursing care notes.</p>
              <button className="btn btn-primary w-100">Open</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default DashboardNurse;
