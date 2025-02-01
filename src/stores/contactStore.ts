import { defineStore } from 'pinia'
import axiosInstance from '../services/axios.ts'
import { EmailModel } from '../models/emailModel.ts'

interface PortofolioState {
  items: any[]
  loading: boolean
  error: string | null
}

export const useContactStore = defineStore('contactStore', {
  state: (): PortofolioState => ({
    items: [],
    loading: false,
    error: null
  }),

  actions: {
    async submitForm(emailModel: EmailModel): Promise<boolean> {
      this.loading = true
      this.error = null

      const headers = {
        'Content-Type': 'application/json'
      }

      const body = {
        service_id: import.meta.env.VITE_APP_SERVICE_ID,
        template_id: import.meta.env.VITE_TEMPLATE_ID,
        user_id: import.meta.env.VITE_USER_ID,
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
        return true
      } catch (error: any) {
        this.error = error.message || 'An error occurred while sending the email.'
        return false
      } finally {
        this.loading = false
      }
    }
  }
})
