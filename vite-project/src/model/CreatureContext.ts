import type { Creature } from "./Creature";
export interface CreaturesContextType {
  creatures: Creature[];
  rescueCreature: (name: string, species: string) => Promise<void>;
  feedCreature: (creature: Creature) => Promise<void>;
  releaseCreature: (id: number) => Promise<void>;
}