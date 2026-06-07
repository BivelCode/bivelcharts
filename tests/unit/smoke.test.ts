import { describe, it, expect } from 'vitest'
import { VERSION } from '../../src/index'

describe('smoke', () => {
  it('exports a version string', () => {
    expect(typeof VERSION).toBe('string')
  })
})
