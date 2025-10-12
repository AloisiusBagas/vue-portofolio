import { setActivePinia, createPinia } from 'pinia'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import type { Mock } from 'vitest'
import { useContactStore } from '@/stores/contactStore'
import axiosInstance from '@/services/axios'
import { EmailModel } from '@/models/emailModel'

vi.mock('@/services/axios', () => ({
  default: {
    post: vi.fn()
  }
}))

const mockedPost = axiosInstance.post as Mock

describe('useContactStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.clearAllMocks()
  })

  it('submitForm success updates items and returns true', async () => {
    const store = useContactStore()
    mockedPost.mockResolvedValue({ data: 'ok' })

    const result = await store.submitForm(new EmailModel())
    expect(result).toBe(true)
    expect(store.items).toBe('ok')
    expect(store.error).toBeNull()
    expect(store.loading).toBe(false)
  })

  it('submitForm failure sets error and returns false', async () => {
    const store = useContactStore()
    mockedPost.mockRejectedValue(new Error('fail'))

    const result = await store.submitForm(new EmailModel())
    expect(result).toBe(false)
    expect(store.error).toBe('fail')
    expect(store.loading).toBe(false)
  })
})
