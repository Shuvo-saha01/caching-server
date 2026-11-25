export type CacheEntry = {
  value: object
  statusCode: number
  headers: Record<string, string | string[]>
  cachedAt: Date
  expireAt: Date
}
