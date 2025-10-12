import { setActivePinia, createPinia } from 'pinia'
import { describe, it, expect, beforeEach } from 'vitest'
import { usePortofolioStore } from '@/stores/portofolioStore'
import type { GitHubRepository } from '@/stores/portofolioStore'

describe('usePortofolioStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('modifyData applies transformations and sorting', () => {
    const store = usePortofolioStore()
    const data: GitHubRepository[] = [
      { id: 688294388, language: 'JavaScript', stargazers_count: 10, html_url: 'url1' },
      { id: 1, language: 'TypeScript', stargazers_count: 5, html_url: 'url2' },
      { id: 318070581, language: 'JavaScript', stargazers_count: 3, html_url: 'url3' },
      { id: 2, language: 'dart', stargazers_count: 2, html_url: 'url4' },
      { id: 3, language: 'JavaScript', stargazers_count: 15, html_url: 'url5' },
      { id: 4, language: 'JavaScript', stargazers_count: 7, html_url: 'url6' }
    ]
    const result = store.modifyData(data)

    // repo with id 688294388 should be updated
    const repo1 = result.find((repo) => repo.id === 688294388)!
    expect(repo1.html_url).toBe('https://aloisiusbagas.github.io/')
    expect(repo1.language).toBe('Dart')

    // repo with id 318070581 should have language dotNet
    const repo2 = result.find((repo) => repo.id === 318070581)!
    expect(repo2.language).toBe('dotNet')

    // languages should be sorted alphabetically
    const languages = result.map((repo) => (repo.language ?? '').toLowerCase())
    const sorted = [...languages].sort()
    expect(languages).toEqual(sorted)

    // for the same language, items are sorted by stargazers_count desc
    const jsRepos = result.filter((repo) => repo.language === 'JavaScript')
    if (jsRepos.length >= 2) {
      expect(jsRepos[0].stargazers_count).toBeGreaterThanOrEqual(jsRepos[1].stargazers_count)
    }
  })
})
