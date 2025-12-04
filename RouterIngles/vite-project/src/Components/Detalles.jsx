import { useParams, useNavigate } from "react-router-dom";
import { irregularVerbs } from "./IrregularVerbs.jsx";
import { useState } from "react";
import "./css/Details.css";

export default function Details() {
  const { verb } = useParams();
  const navigate = useNavigate();

  const selectedVerb = irregularVerbs.find(v => v.v1 === verb);

  const [pastSimple, setPastSimple] = useState("");
  const [pastParticiple, setPastParticiple] = useState("");

  if (!selectedVerb) {
    return <h2>Verb not found</h2>;
  }

  const checkAnswer = (input, correct) => {
    return input.trim().toLowerCase() === correct.trim().toLowerCase();
  };

  return (
    <div className="details-container">
      <h2>Practice "{selectedVerb.v1}"</h2>
      <ul>
        <li>
          <strong>Past simple:</strong>
          <input
            type="text"
            value={pastSimple}
            onChange={(e) => setPastSimple(e.target.value)}
            className={
              pastSimple
                ? checkAnswer(pastSimple, selectedVerb.v2)
                  ? "correct"
                  : "incorrect"
                : ""
            }
            placeholder="Write past simple..."
          />
        </li>
        <li>
          <strong>Past participle:</strong>
          <input
            type="text"
            value={pastParticiple}
            onChange={(e) => setPastParticiple(e.target.value)}
            className={
              pastParticiple
                ? checkAnswer(pastParticiple, selectedVerb.v3)
                  ? "correct"
                  : "incorrect"
                : ""
            }
            placeholder="Write past participle..."
          />
        </li>
      </ul>
      <button onClick={() => navigate(-1)}>⬅ Back</button>
    </div>
  );
}
