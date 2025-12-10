import React from 'react';
import type { Creature } from '../model/Creature';
import { useCreatures } from '../context/CreaturesContext';
// El CSS ya se importó en el padre (List), pero es buena práctica importarlo aquí también si usamos módulos o scoped.
// Como son archivos CSS normales, con importarlo una vez basta, pero para encapsular:
import './CreatureCard.css'; 
interface CreatureCardProps {
  creature: Creature;
}
export default function CreatureCard({ creature } : CreatureCardProps) {
  const { feedCreature, releaseCreature } = useCreatures();

  // Lógica visual simple
  const getBarColor = (val : number) => {
    if (val < 30) return '#e63946'; // Rojo
    if (val >= 100) return '#ffd700'; // Dorado (Máximo)
    if (val > 70) return '#2d6a4f'; // Verde
    return '#e9c46a'; // Amarillo/Naranja
  };

  return (
    <div className="creature-card">
      <h2>{creature.name}</h2>
      <p className="creature-species">{creature.species}</p>
      
      <div className="happiness-container">
        <div 
          className="happiness-bar" 
          style={{ 
            width: `${creature.happiness}%`, 
            backgroundColor: getBarColor(creature.happiness) 
          }}
        ></div>
      </div>
      
      <p style={{fontSize: '0.8rem', color: '#666'}}>Felicidad: {creature.happiness}/100</p>

      <div className="card-actions">
        <button 
          className="btn-action btn-feed" 
          onClick={() => feedCreature(creature)}
          disabled={creature.happiness >= 100}
        >
          {creature.happiness >= 100 ? '🥰 Lleno' : '🍖 Alimentar'}
        </button>
        
        <button 
          className="btn-action btn-release"
          onClick={() => releaseCreature(creature.id)}
        >
          🌲 Liberar
        </button>
      </div>
    </div>
  );
}