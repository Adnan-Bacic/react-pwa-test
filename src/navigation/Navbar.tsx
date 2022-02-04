import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-neutral-800 text-white flex justify-center py-5">
      <nav>
        <Link to="/" className="px-3">Home</Link>
        <Link to="/about" className="px-3">About</Link>
        <Link to="/items" className="px-3">Items - Navigate</Link>
        <Link to="/itemsOutlet" className="px-3">Items - Outlet</Link>
      </nav>
    </header>
  );
}

export default Navbar;
