import { createContext, useState, useEffect, useContext } from 'react';
import type { Creature } from '../model/Creature';
import type { CreaturesContextType } from '../model/CreatureContext';
import type { ProviderProps } from '../model/Provider';
import { creatureService } from '../services/creatures.service.ts';

const CreaturesContext = createContext<CreaturesContextType | null>(null);

// Hook personalizado
export const useCreatures = () => {
  const context = useContext(CreaturesContext);
  if (!context) throw new Error('useCreatures debe usarse dentro de un CreaturesProvider');
  return context;
};

export const CreaturesProvider = ({ children }: ProviderProps) => {
  const [creatures, setCreatures] = useState<Creature[]>([]);

  useEffect(() => {
    loadCreatures();
  }, []);

  const loadCreatures = async () => {
    try {
      const data: Creature[] = await creatureService.getAll();
      setCreatures(data);
    } catch (error) {
      console.error(error);
    }
  };

  const rescueCreature = async (name: string, species: string) => {
    const newCreature: Omit<Creature, 'id'> = { name, species, happiness: 50 };
    try {
      const savedCreature: Creature = await creatureService.create(newCreature);
      setCreatures(prev => [...prev, savedCreature]);
    } catch (error) {
      console.error(error);
    }
  };

  const feedCreature = async (creature: Creature) => {
    if (creature.happiness >= 100) return;

    const updatedData: Creature = {
      ...creature,
      happiness: creature.happiness + 10
    };

    try {
      const result: Creature = await creatureService.update(creature.id, updatedData);
      setCreatures(prev =>
        prev.map(c => (c.id === result.id ? result : c))
      );
    } catch (error) {
      console.error(error);
    }
  };

  const releaseCreature = async (id: number) => {
    try {
      await creatureService.delete(id);
      setCreatures(prev => prev.filter(c => c.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CreaturesContext.Provider
      value={{
        creatures,
        rescueCreature,
        feedCreature,
        releaseCreature,
      }}
    >
      {children}
    </CreaturesContext.Provider>
  );
};