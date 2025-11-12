import { Link } from "react-router-dom";
import './css/Layout.css';

export default function About(){
    return (
        <div className="content">
          <h2>About</h2>
          <Link to="about">About</Link>
        </div>
    );

}