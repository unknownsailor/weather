import { observer } from 'mobx-react'
import { useContext, useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { font } from '../../constants/fonts'
import { IUnitsContext, UnitsContext } from '../../providers/UnitsProvider'
import { WeatherService } from '../../services/WeatherService'
import { deviceLocale, getIcon, getTemp } from '../../utils'
import { CityName } from './CityName'
import { DailyForecast } from './DailyForecast'
import { Temp } from './Temp'
import { UnitsSwitcher } from './UnitsSwitcher'
import { WeatherIcon } from './WeatherIcon'

interface IScreenProps {
  weather: WeatherService
}

export const Screen = observer((props: IScreenProps) => {
  const unitsContext = useContext(UnitsContext) as IUnitsContext

  useEffect(() => {
    const lang = deviceLocale().split('_')[0]
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
        <WeatherIcon icon={getIcon(props.weather.current.weather[0].icon)} size={260} />
        <Temp temp={getTemp(props.weather.current.main.temp)} styles={styles.temp} />
      </View>
      <DailyForecast daily={props.weather.daily} />
    </ScrollView>
  )
})

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  temp: {
    fontFamily: font.EXO2_SEMIBOLD,
    fontSize: 48,
    lineHeight: 54,
  }
})