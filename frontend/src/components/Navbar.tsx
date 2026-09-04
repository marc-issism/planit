import { Link } from "react-router";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar d-flex">
      {/* <img src="" alt="Brand Logo"></img> */}
      <ul>
        <li>
          <Link to="/">Planit.</Link>
        </li>
        <li>
          <Link to="/plan/list">My Plans</Link>
        </li>
        <li>
          <Link to="/plan">View</Link>
        </li>
        <li>
          <Link to="/plan/create">Create</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
