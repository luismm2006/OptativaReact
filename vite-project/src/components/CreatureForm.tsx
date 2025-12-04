import React, { useState } from 'react';
import { useCreatures } from '../context/CreaturesContext';
import './CreatureForm.css'; // <--- Importamos estilos del form

export default function CreatureForm() {
  const { rescueCreature } = useCreatures();
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !species) return;
    rescueCreature(name, species);
    setName('');
    setSpecies('');
  };

  return (
    <div className="rescue-form-container">
      <h3>🪄 Rescatar nueva criatura</h3>
      <form onSubmit={handleSubmit} className="rescue-form">
        <input 
          className="input-field"
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Nombre de la criatura..." 
          required 
        />
        <input 
          className="input-field"
          value={species} 
          onChange={(e) => setSpecies(e.target.value)} 
          placeholder="Especie mágica..." 
          required 
        />
        <button type="submit" className="btn-rescue">Invocar</button>
      </form>
    </div>
  );
}