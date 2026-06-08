export interface ThemeColors {
  palette: string[]
  grid: string
  axisLine: string
  axisTick: string
  title: string
  subtitle: string
  legend: string
  label: string
  heatmap: { start: string; end: string }
}

export interface ThemeFonts {
  family: string
  size: { title: number; subtitle: number; legend: number; label: number }
  weight: { title: number; subtitle: number; legend: number; label: number }
}

export interface Theme {
  colors: ThemeColors
  fonts: ThemeFonts
}
