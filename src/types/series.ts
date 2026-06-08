export interface DataSeries {
  legend: string
  values: number[]
}

export interface Series {
  categories?: string[]
  data: DataSeries[]
}
