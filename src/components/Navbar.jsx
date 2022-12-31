import "../../src/styles/Navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "./Context/Auth";
// import { Navigate,useNavigate } from "react";
import { useNavigate } from "react-router-dom";
export const Navbar = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const handlelogout = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        width: "100%",
        backgroundColor: "black",
        borderBottom: "5px solid DarkGray",
        display: "flex",
        justifyContent: "center",
        // overflow: "hidden",
        zIndex: "10000",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",

          color: "white",
          alignItems: "center",
          fontSize: "27px",
          height: "70px",
          width: "1280px",
          padding: "22px",
        }}
      >
        <div>
          <Link to="/" style={{ marginRight: "50px" }}>
            Home
          </Link>
          <Link to="/flat">Flat</Link>
        </div>
        {/* <div>Niice</div> */}

        <div>
          <Link to="/signup" style={{ marginRight: "50px" }}>
            Signup
          </Link>

          {!auth.user ? (
            <Link to="/login">LogIn</Link>
          ) : (
            <button onClick={handlelogout}>Logout</button>
          )}
        </div>
      </div>
    </div>
  );
};
