import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
        {/* TODO: Replace this by react-router-dom Link component */}
        <Link className="navbar-brand" to="/">
          WikiCountries
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;