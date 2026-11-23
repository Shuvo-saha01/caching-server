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
  }

  set(key: string, entry: CacheEntry): void {
    // TODO: implement
    throw new Error('Not implemented')
  }

  delete(key: string): boolean {
    // TODO: implement
    throw new Error('Not implemented')
  }
}
