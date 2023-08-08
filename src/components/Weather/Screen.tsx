import React, { useContext } from 'react'
import { observer } from 'mobx-react'
import { useEffect } from 'react'
import { WeatherService } from '../../services/WeatherService'
import { Pressable, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native'
import { CityName } from './CityName'
import { WeatherIcon } from './WeatherIcon'
import { Temp } from './Temp'
import { DailyForecast } from './DailyForecast'
import { deviceLocale, getIcon, getTemp } from '../../utils'
import { IUnitsContext, UnitsContext } from '../../providers/UnitsProvider'
import { Units } from '../../enums/Units'
import { UnitsSwitcher } from './UnitsSwitcher'

interface IScreenProps {
  weather: WeatherService
}

export const Screen = observer((props: IScreenProps) => {
  const unitsContext = useContext(UnitsContext) as IUnitsContext

  useEffect(() => {
    const lang = deviceLocale().split('-')[0]
    props.weather.getLocation(unitsContext.units, lang)
  }, [unitsContext.units])

  if(props.weather.loading.current) {
    return <Text>Loading</Text>
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <UnitsSwitcher units={unitsContext.units} onUnits={unitsContext.changeUnits} />
      <CityName name={props.weather.current.name} />
      <View style={styles.block}>
        <WeatherIcon icon={getIcon(props.weather.current.weather[0].icon)} />
        <Temp temp={getTemp(props.weather.current.main.temp)} />
      </View>
      <DailyForecast daily={props.weather.daily} />
    </ScrollView>
  )
})

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexGrow: 1,
  },
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})