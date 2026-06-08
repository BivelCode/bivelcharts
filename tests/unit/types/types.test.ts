import { describe, it, expect } from 'vitest'
import type { ChartOptions } from '../../../src/types'

describe('types', () => {
  it('accepts a minimal valid column config object', () => {
    const config: ChartOptions = {
      series: [{ categories: ['A', 'B'], data: [{ legend: 'S1', values: [1, 2] }] }],
      chart: { type: 'column', subtype: 'basic' },
    }
    expect(config.chart.type).toBe('column')
  })
})
