import { useCallback } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { IDaily } from '../../interfaces/IDaily'
import { getDate, getIcon, getTemp } from '../../utils'
import { Date } from './Date'
import { Temp } from './Temp'
import { WeatherIcon } from './WeatherIcon'

interface IDailyForecastProp {
  daily: Array<IDaily>
}

export const DailyForecast = (props: IDailyForecastProp) => {
  const { daily } = props

  const keyExtractor = useCallback((item: IDaily) => item.dt.toString(), [])

  const renderItem = ({ item }: { item: IDaily }) => {
    return (
      <View style={styles.plate}>
        <Date date={getDate(item.dt)} />
        <WeatherIcon icon={getIcon(item.weather[0].icon)} />
        <Temp temp={getTemp(item.temp.day)} />
        <Temp temp={getTemp(item.temp.night)} styles={styles.minTemp} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={keyExtractor}
        data={daily.slice(1)}
        renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  plate: {
    width: 90,
    marginRight: 8,
    alignItems: 'center',
  },
  minTemp: {
    opacity: 0.8,
  },
})
