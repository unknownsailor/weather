import { observer } from 'mobx-react'
import { WeatherService } from '../services/WeatherService'
import { useEffect } from 'react'
import { Text } from 'react-native'

interface IWeatherProps {
  weather: WeatherService
}

export const WeatherScreen = observer((props: IWeatherProps) => {
  console.log(props.weather)

  useEffect(() => {
    props.weather.getLocation()
  }, [])

  if (props.weather.loading.fetch) {
    return <Text>Loading</Text>
  }

  return <></>
})
