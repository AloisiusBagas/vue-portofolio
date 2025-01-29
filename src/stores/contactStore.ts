import { defineStore } from 'pinia'
import axiosInstance from '../services/axios.ts'
import { EmailModel } from '../models/emailModel.ts'

interface PortofolioState {
  items: any[]
  loading: boolean
  error: string | null
}

export const usePortofolioStore = defineStore('contactStore', {
  state: (): PortofolioState => ({
    items: [],
    loading: false,
    error: null
  }),

  actions: {
    async fetchItems(emailModel: EmailModel) {
      this.loading = true
      this.error = null

      // Header yang ingin dikirim
      const headers = {
        'Content-Type': 'application/json'
      }

      // Body untuk request
      const body = {
        service_id: import.meta.env.VUE_APP_SERVICE_ID,
        template_id: import.meta.env.VUE_TEMPLATE_ID,
        user_id: import.meta.env.VUE_USER_ID,
        template_params: {
          from_name: emailModel.name,
          from_email: emailModel.email,
          subject: emailModel.subject,
          message: emailModel.message
        }
      }

      try {
        const response = await axiosInstance.post(
          'https://api.emailjs.com/api/v1.0/email/send',
          body,
          { headers }
        )
        this.items = response.data
      } catch (error: any) {
        // Tangani error jika terjadi
        this.error = error.message || 'An error occurred while fetching items.'
      } finally {
        this.loading = false
      }
    }
  }
})
