import React from 'react';
import { useCreatures } from '../context/CreaturesContext';
import CreatureCard from './CreatureCard';
import './CreatureCard.css'; // <--- Importamos estilos de las cartas/grid

export default function CreatureList() {
  const { creatures } = useCreatures();

  if (creatures.length === 0) {
    return <p style={{textAlign: 'center', color: '#888'}}>No hay criaturas en el santuario. ¡Rescata alguna!</p>;
  }

  return (
    <div className="creature-grid">
      {creatures.map((creature) => (
        <CreatureCard key={creature.id} creature={creature} />
      ))}
    </div>
  );
}