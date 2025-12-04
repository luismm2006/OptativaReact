import { irregularVerbs } from "./IrregularVerbs.jsx";
import "./css/Resource.css";
import { useNavigate } from "react-router-dom";

export default function Resource() {
    
    const navigate = useNavigate();
    
    return (
    <div className="resource-container">
      <h2>Irregular Verbs</h2>

      <table className="verbs-table">
        <thead>
          <tr>
            <th>Base</th>
            <th>Details</th>
          </tr>
        </thead>

        <tbody>
          {irregularVerbs.map((item, index) => (
            <tr key={index}>
              <td>{item.v1}</td>
              <td><button onClick={() => navigate(`/detalles/${item.v1}`)}>Details</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
