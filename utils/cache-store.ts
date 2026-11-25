import type { CacheEntry } from './cache-entry.ts'

export class CacheStore {
  private memory: Map<string, CacheEntry>

  constructor() {
    this.memory = new Map()
  }

  get(key: string): CacheEntry {
    const entry = this.memory.get(key)

    if (!entry) {
      throw new Error(`Cache entry not found: ${key}`)
    }

    if (entry.expireAt.getTime() <= Date.now()) {
      throw new Error(`Cache entry expired: ${key}`)
    }

    return entry
    // TODO: Handle the lazy expiry check
  }

  set(key: string, entry: CacheEntry): void {
    try {
      this.memory.set(key, entry)
    } catch (error) {
      throw new Error(`Failed to cache entry: ${key}`, { cause: error })
    }
  }

  delete(key: string): void {
    try {
      this.memory.delete(key)
    } catch (error) {
      throw new Error(`Failed to delete cache entry: ${key}`, { cause: error })
    }
  }
}
