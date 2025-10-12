import { isAxiosError } from 'axios'
import { defineStore } from 'pinia'
import axiosInstance from '../services/axios'

export interface PortfolioState {
  items: GitHubRepository[]
  loading: boolean
  error: string | null
}

export interface GitHubRepository {
  id: number
  html_url: string
  language: string | null
  stargazers_count: number
  name: string
  description: string | null
  url: string
  forks_count: number
  created_at: string
  updated_at: string
  [key: string]: unknown
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
        const response = await axiosInstance.get<GitHubRepository[]>(
          'https://api.github.com/users/AloisiusBagas/repos'
        )
        this.items = this.modifyData(response.data)
      } catch (error: unknown) {
        if (isAxiosError(error)) {
          this.error =
            error.response?.data?.message || error.message || 'Failed to fetch data from GitHub.'
        } else if (error instanceof Error) {
          this.error = error.message
        } else {
          this.error = 'An unknown error occurred while fetching items.'
        }
      } finally {
        this.loading = false
      }
    },

    modifyData(data: GitHubRepository[]) {
      const modifiedData = [...data]

      // Web Flutter project - set custom URL and language
      const index = modifiedData.findIndex((repo) => repo.id === 688294388)
      if (index !== -1) {
        const repo = modifiedData[index]
        if (repo) {
          modifiedData[index] = {
            ...repo,
            html_url: 'https://aloisiusbagas.github.io/',
            language: 'Dart'
          }
        }
      }

      // Another project - change language to dotNet
      const index2 = modifiedData.findIndex((repo) => repo.id === 318070581)
      if (index2 !== -1) {
        const repo = modifiedData[index2]
        if (repo) {
          modifiedData[index2] = {
            ...repo,
            language: 'dotNet'
          }
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
