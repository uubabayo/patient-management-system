import { useState } from "react";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

function RegisterPatient() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });

  const [message, setMessage] = useState("");
  //Go back to dashboard
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/record");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.firstName || !formData.lastName || !formData.phone) {
      setMessage("Please fill in all fields");
      return;
    }

    // Success message
    setMessage(
      `Patient ${formData.firstName} ${formData.lastName} registered successfully!`
    );

    // Clear form and redirect after 3 seconds
    setFormData({ firstName: "", lastName: "", phone: "" });

    setTimeout(() => {
      navigate("/patient-list");
    }, 3000);
  };

  return (
    <Layout>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h3 className="text-center mb-4">Register Patient</h3>

            {message && (
              <div
                className={`alert ${
                  message.includes("successfully")
                    ? "alert-success"
                    : "alert-danger"
                }`}
              >
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Register Patient
              </button>
              <button
                type="button"
                className="btn btn-success ms-2"
                onClick={handleBack}
              >
                Back to Dashboard
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default RegisterPatient;
