import api from './api';

export const dataService = {
  getControls: async () => {
    try {
      const response = await api.get('/api/controls');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateControl: async (id, data) => {
    try {
      const response = await api.put(`/api/controls/${id}`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};