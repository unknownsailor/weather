import { useMemo } from 'react'
import { Text } from 'react-native'
import { Screen } from '../components/Weather/Screen'
import { WeatherService } from '../services/WeatherService'

export const WeatherScreen = () => {
  const weather = useMemo(() => new WeatherService(), [])

  if (!weather) {
    return <Text>Loading</Text>
  }

  return <Screen weather={weather} />
}
