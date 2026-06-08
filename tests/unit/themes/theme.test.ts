import { describe, it, expect } from 'vitest'
import { theme } from '../../../src/themes/theme'

describe('theme', () => {
  it('exposes a non-empty color palette and font tokens', () => {
    expect(theme.colors.palette.length).toBeGreaterThan(0)
    expect(theme.fonts.family).toContain('Noto Sans')
    expect(theme.fonts.size.title).toBe(16)
    expect(theme.colors.grid).toBe('#e9eaeb')
  })
})
