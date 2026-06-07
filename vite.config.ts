import { defineConfig } from 'vitest/config'

export default defineConfig({
  build: {
    outDir: 'dist',
    lib: {
      entry: 'src/index.ts',
      name: 'BivelCharts',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => `js/bivelcharts.${format}.js`,
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['tests/**/*.test.ts'],
  },
})
