import React, { useMemo } from 'react'
import { WeatherService } from '../services/WeatherService'
import { Text } from 'react-native'
import { Screen } from '../components/Weather/Screen'

interface IWeatherProps {}

export const WeatherScreen = (props: IWeatherProps) => {
  const weather = useMemo(() => new WeatherService(), [])

  if (!weather) {
    return <Text>Loading</Text>
  }

  return <Screen weather={weather} />
}
