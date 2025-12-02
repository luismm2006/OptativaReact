import { PostCreatures } from "../Services/api";
import { useState } from "react";

const PostCreaturesComponent = () => {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [happiness, setHappiness] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newCreature = { name, species, happiness: 50 };
      await PostCreatures(newCreature);
      alert("Criatura registrada con éxito");
      
      setName("");
      setSpecies("");
      setHappiness("");
      window.location.reload();
    } catch (error) {
      console.error("Error guardando criatura:", error);
    }
  };

  return (
    <div>
      <h1>Rescatar nueva criatura</h1>
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Nombre: </label>
            <input 
            type="text" 
            id="name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </div>

        <div>
            <label htmlFor="species">Especie: </label>
            <input 
            type="text" 
            id="species" 
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
            />
        </div>

        <div>
            <label htmlFor="happiness">Felicidad: </label>
            <input 
            type="number" 
            id="happiness"
            value={happiness}
            onChange={(e) => setHappiness(e.target.value)}
            />
        </div>

        <button type="submit">Rescatar</button>
      </form>
    </div>
  );
};

export default PostCreaturesComponent;
