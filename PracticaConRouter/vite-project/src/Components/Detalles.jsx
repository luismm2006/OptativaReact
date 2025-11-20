import { useNavigate, useParams } from "react-router-dom";
import { irregularVerbs } from "./IrregularVerbs.jsx";
import "./css/Recurso.css"
export default function Detalles() {
    const {verb} = useParams();
    const navigate = useNavigate();
    const verbSelected = irregularVerbs.find(v=>v.v1 == verb);
  return (
      <div className="content">
      <h2>Lista de verbos</h2>
    
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Past Simple</th>
            <th>Past Participle</th>
            <th>Translation</th>
          </tr>
        </thead>

        <tbody>
            <tr>
              <td>{verbSelected.v1}</td>
              <td>{verbSelected.v2}</td>
              <td>{verbSelected.v3}</td>
            </tr>
        </tbody>
      </table>
            <button onClick={() => navigate(-1)}>Back</button>

    </div>
  );
}
