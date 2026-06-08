import type { Theme, ThemeColors, ThemeFonts } from '../types/theme'

export const colors: ThemeColors = {
  palette: ['#3B82F6', '#F59E0B', '#10B981', '#EF4444', '#8B5CF6', '#F97316', '#06B6D4'],
  grid: '#e9eaeb',
  axisLine: '#d3d5d6',
  axisTick: '#d3d5d6',
  title: '#21252b',
  subtitle: '#7a8084',
  legend: '#212c32',
  label: '#bcc0c2',
  heatmap: { start: '#dbeafe', end: '#1d4ed8' },
}

export const fonts: ThemeFonts = {
  family: "'Noto Sans', sans-serif",
  size: { title: 16, subtitle: 13, legend: 12, label: 10 },
  weight: { title: 600, subtitle: 400, legend: 400, label: 300 },
}

export const theme: Theme = { colors, fonts }
