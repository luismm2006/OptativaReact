import { Link, Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import './css/Layout.css';
const Layout = () => {
  return (
    <>
      <Header/>
      <nav style={{ display: "flex", justifyContent: "space-around" }}>
        <Link className="links" to="/home">Home</Link>
        <Link className="links" to="/about">About</Link>
        <Link className="links" to="/contact">Contact</Link>
        <Link className="links" to="/Recurso">Recurso</Link>
      </nav>
      <Outlet/>
      <Footer/>
    </>
  );
};
export default Layout;