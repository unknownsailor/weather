import { useMemo } from "react"
import { Text, View } from "react-native"
import { WeatherService } from "../services/WeatherService"
import { WeatherScreen } from "./WeatherScreen"

export const Screen = () => {
  const weather = useMemo(() => new WeatherService(), [])

  if(!weather) {
    return <Text>Loading</Text>
  }

  return <WeatherScreen weather={weather} />
}