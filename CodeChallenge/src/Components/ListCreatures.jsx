import { deleteById, getAllCreatures, putCreatures } from "../Services/api";
import { useState, useEffect } from "react";

const GetList = () => {
  const [creatures, setCreatures] = useState([]);

  useEffect(() => {
    const loadCreatures = async () => {
      try {
        const listCreatures = await getAllCreatures();
        setCreatures(listCreatures);
      } catch (error) {
        console.error("Error cargando criaturas:", error);
      }
    };
    loadCreatures();
  }, []);

  const handleClick = async (id, happiness) => {
    try {
      await putCreatures(id, happiness + 10);

      setCreatures(prev =>
        prev.map(c =>
          c.id === id ? { ...c, happiness: c.happiness + 10 } : c
        )
      );
    } catch (error) {
      console.error("Error alimentando criaturas:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteById(id);
      setCreatures(creatures => creatures.filter(c => c.id != id));
    } catch (error) {
      console.error("Error eliminando criaturas:", error);
    }
  }


  return (
    <div>
      <h1>Criaturas</h1>
      <ul>
        {creatures.map(c => (
          <li key={c.id}>
            <strong>{c.name}</strong>
            <p>{c.species}</p>
            <p>Felicidad: {c.happiness}</p>
            <button onClick={() => handleClick(c.id, c.happiness)}>
              Alimentar
            </button>
            <button onClick={() => handleDelete(c.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetList;
