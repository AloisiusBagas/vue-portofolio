import { defineStore } from 'pinia';
import axiosInstance from '../services/axios.ts';

interface PortofolioState {
  items: any[];
  loading: boolean;
  error: string | null;
}

export const usePortofolioStore = defineStore('contactStore', {
  state: (): PortofolioState => ({
    items: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchItems() {
      this.loading = true;
      this.error = null;
      header = {
        'Content-Type': 'application/json',
      };
      body = {
        'service_id': import.meta.env.VITE_SERVICE_ID,
        'template_id': import.meta.env.VITE_TEMPLATE_ID,
        'user_id': import.meta.env.VITE_USER_ID,
        'template_params': {
          'from_name': emailModel.name,
          'from_email': emailModel.email,
          'subject': emailModel.subject,
          'message': emailModel.message
        }
      };
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



