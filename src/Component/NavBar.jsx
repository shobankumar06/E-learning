import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>E-learning</h2>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/progress">Progress</Link>
        <Link to="/certificate">Certificate</Link>
        <Link to="/">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
