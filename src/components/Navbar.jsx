import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-dark bg-primary px-3">
      <span className="navbar-brand">Patient Management System</span>

      <div className="d-flex align-items-center">
        {user && (
          <span className="text-white me-3 text-capitalize">
            {user.role} Panel
          </span>
        )}
        <button className="btn btn-light btn-sm" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
