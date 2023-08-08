import { ITemp } from "./Weather/ITemp";
import { IWeather } from "./Weather/IWeather";

export interface IDaily {
  dt: number
  weather: IWeather
  temp: ITemp
}