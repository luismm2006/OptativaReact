import { Navigate, useNavigate } from "react-router-dom";
import { irregularVerbs } from "./IrregularVerbs.jsx";
import "./css/Recurso.css"
export default function Recurso() {
    const navigate = useNavigate();
  return (
    <div className="content">
      <h2>Lista de verbos</h2>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Verbo (V1)</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {irregularVerbs.map((item, index) => (
            <tr key={index}>
              <td>{item.v1}</td>
              <td>
                <button
                  onClick={() => navigate(`/detalles/${item.v1}`)}
                >
                  Ver detalles
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}
