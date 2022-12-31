import "../../styles/home.css";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div className="backgroundImageHome center">
      <h1 className="heading">Apartment Management System</h1>

      <button className="addBtn">
        <Link to="/flatform" className="clickBtn">
          Add Flat
        </Link>
      </button>
    </div>
  );
};
