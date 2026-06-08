import type { Series } from './series'

export type ChartType = 'column' | 'bar' | 'line' | 'area' | 'pie' | 'radar' | 'gauge' | 'heatmap'

export type ChartSubtype = 'basic'

export type Padding =
  | number
  | [number, number, number, number]
  | { top?: number; right?: number; bottom?: number; left?: number }

export interface BorderOptions {
  enabled: boolean
  width: number
  color: string[]
  opacity: number
}

export interface PlotOption {
  width?: number | 'auto'
  spacing?: number
  colors?: string | string[]
  opacity?: number | number[]
  radius?: number
  radiusApplication?: 'start' | 'end' | 'both'
  border?: BorderOptions
  lineWidth?: number
  tension?: number
  markers?: boolean
  markerSize?: number
  innerRadius?: number
  gaugeMin?: number
  gaugeMax?: number
  gaugeValue?: number
  gaugeThickness?: number
  heatmapColors?: string[]
}

export interface GridOptions {
  enabled: boolean
  line: string
  lineWidth: number
  dashArray: string
}

export interface AxisOptions {
  enabled: boolean
  lineColor: string
  lineWidth: number
  tickShow: boolean
  tickLength: number
  tickColor: string
  tickWidth: number
}

export interface RenderingOptions {
  plotOption: PlotOption
  grid: GridOptions
  xAxis: AxisOptions
  yAxis: AxisOptions
}

export interface TextConfig {
  enabled: boolean
  position: 'top' | 'bottom' | 'left' | 'right'
  align: 'left' | 'center' | 'right'
  rotate?: number
  fontFamily: string
  fontWeight: number
  fontSize: number
  foreColor: string
}

export interface LabelsConfig {
  labelAxisX: TextConfig
  labelAxisY: TextConfig
}

export interface ChartConfig {
  type: ChartType
  subtype: ChartSubtype
  title?: string
  subtitle?: string
  height?: number
  width?: number
  padding?: Padding
  rendering?: Partial<RenderingOptions>
  titleConfig?: Partial<TextConfig>
  subtitleConfig?: Partial<TextConfig>
  legend?: Partial<TextConfig>
  labels?: Partial<LabelsConfig>
}

export interface ChartOptions {
  series: Series[]
  chart: ChartConfig
}

/** Fully-resolved config: every optional has been filled by ConfigResolver. */
export interface ResolvedConfig {
  series: Series[]
  chart: {
    type: ChartType
    subtype: ChartSubtype
    title: string
    subtitle: string
    height: number
    width: number
    padding: { top: number; right: number; bottom: number; left: number }
    rendering: RenderingOptions
    titleConfig: TextConfig
    subtitleConfig: TextConfig
    legend: TextConfig
    labels: LabelsConfig
  }
}
