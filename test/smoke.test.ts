import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'

const pkg = JSON.parse(
  readFileSync(new URL('../package.json', import.meta.url), 'utf8'),
)

describe('vitest installation', () => {
  it('is listed as a dev dependency', () => {
    expect(pkg.devDependencies).toHaveProperty('vitest')
  })

  it('runs TypeScript test files', () => {
    const sum = (a: number, b: number): number => a + b
    expect(sum(2, 3)).toBe(5)
  })
})
