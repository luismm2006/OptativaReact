//const API_URL = 'http://localhost:3000/creatures';
const API_URL = 'https://6931541411a8738467ce40ff.mockapi.io/creatures';

export const creatureService = {
  getAll: async () => {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Error al obtener criaturas');
    return response.json();
  },

  create: async (creature) => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(creature),
    });
    if (!response.ok) throw new Error('Error al crear criatura');
    return response.json();
  },

  update: async (id, updatedData) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedData),
    });
    if (!response.ok) throw new Error('Error al actualizar criatura');
    return response.json();
  },

  delete: async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Error al eliminar criatura');
    return true; // Retornamos true si salió bien
  }
};
