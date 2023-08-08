import { IMain } from './Weather/IMain'
import { ISys } from './Weather/ISys'
import { IWeather } from './Weather/IWeather'
import { IWind } from './Weather/IWind'

export interface ICurrent {
  base: string
  clouds: { all: number }
  cod: number
  coord: { lon: number; lat: number }
  dt: number
  id: number
  main: IMain
  name: string
  sys: ISys
  timezone: number
  visibility: number
  weather: Array<IWeather>
  wind: IWind
}
