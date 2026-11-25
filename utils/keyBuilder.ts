import type { Request } from 'express'

export function keyBuilder(req: Request): string {
  const query = Object.keys(req.query)
    .sort()
    .flatMap((key) => {
      const value = req.query[key]

      if (Array.isArray(value)) {
        return value.map((item) => `${key}=${String(item)}`)
      }

      return `${key}=${String(value)}`
    })
    .join('&')

  return `${req.method}:${req.path}${query ? `?${query}` : ''}`
}
