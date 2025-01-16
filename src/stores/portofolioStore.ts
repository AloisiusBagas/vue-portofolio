import { defineStore } from 'pinia';
import axiosInstance from '../services/axios.ts';

interface PortofolioState {
  items: any[];
  loading: boolean;
  error: string | null;
}

export const usePortofolioStore = defineStore('portofolioStore', {
  state: (): PortofolioState => ({
    items: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchItems() {
      this.loading = true;
      this.error = null;

      try {
        const response = await axiosInstance.get('https://api.github.com/users/AloisiusBagas/repos'); 
        this.items = response.data;
      } catch (error: any) {
        this.error = error.message || 'An error occurred while fetching items.';
      } finally {
        this.loading = false;
      }
    },
  },
});
