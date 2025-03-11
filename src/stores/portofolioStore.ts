import { defineStore } from 'pinia'
import axiosInstance from '../services/axios'
import { isAxiosError } from 'axios'

export interface PortfolioState {
  items: any[]
  loading: boolean
  error: string | null
}

export const usePortofolioStore = defineStore('PortofolioStore', {
  state: (): PortfolioState => ({
    items: [],
    loading: false,
    error: null
  }),

  actions: {
    async fetchItems() {
      this.loading = true
      this.error = null

      try {
        const response = await axiosInstance.get('https://api.github.com/users/AloisiusBagas/repos')
        this.items = this.modifyData(response.data)
      } catch (error: any) {
        if (isAxiosError(error)) {
          // Axios-specific error handling
          this.error =
            error.response?.data?.message || error.message || 'Failed to fetch data from GitHub.'
        } else {
          // Generic error (non-Axios errors, like runtime errors)
          this.error = error.message || 'An unknown error occurred while fetching items.'
        }
      } finally {
        this.loading = false
      }
    },

    modifyData(data: any[]) {
      const modifiedData = [...data]

      // Web Flutter project - set custom URL and language
      const index = modifiedData.findIndex((repo) => repo.id === 688294388)
      if (index !== -1) {
        modifiedData[index] = {
          ...modifiedData[index],
          html_url: 'https://aloisiusbagas.github.io/',
          language: 'Dart'
        }
      }

      // Another project - change language to dotNet
      const index2 = modifiedData.findIndex((repo) => repo.id === 318070581)
      if (index2 !== -1) {
        modifiedData[index2] = {
          ...modifiedData[index2],
          language: 'dotNet'
        }
      }

      // Sort by language (case-insensitive to handle variations like Dart vs dart)
      modifiedData.sort((a, b) => {
        const langA = (a.language || '').toLowerCase()
        const langB = (b.language || '').toLowerCase()

        if (langA < langB) return -1
        if (langA > langB) return 1

        // If languages are the same, sort by stargazers_count (descending)
        return (b.stargazers_count || 0) - (a.stargazers_count || 0)
      })

      return modifiedData
    }
  }
})
