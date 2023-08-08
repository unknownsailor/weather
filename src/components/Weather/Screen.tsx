import React from 'react'
import { observer } from 'mobx-react'
import { useEffect } from 'react'
import { WeatherService } from '../../services/WeatherService'
import { RefreshControl, ScrollView, StyleSheet, Text } from 'react-native'
import { CityName } from './CityName'
import { WeatherIcon } from './WeatherIcon'
import { Temp } from './Temp'
import { DailyForecast } from './DailyForecast'
import { getTemp } from '../../utils'

interface IScreenProps {
  weather: WeatherService
}

export const Screen = observer((props: IScreenProps) => {

  useEffect(() => {
    props.weather.getLocation()
  }, [])

  if(props.weather.loading.current) {
    return <Text>Loading</Text>
  }

  return (
    <ScrollView style={styles.container} refreshControl={<RefreshControl refreshing={false} onRefresh={props.weather.currentForecast} />}>
      <CityName name={props.weather.current.name} />
      <WeatherIcon icon={`https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${props.weather.current.weather[0].icon}.png`} />
      <Temp temp={getTemp(props.weather.current.main.temp)} />
      <DailyForecast daily={props.weather.daily} />
    </ScrollView>
  )
})

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
})