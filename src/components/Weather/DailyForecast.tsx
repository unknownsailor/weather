import React, { useCallback } from 'react'
import { IDaily } from '../../interfaces/IDaily'
import { FlatList, StyleSheet, View } from 'react-native'
import { WeatherIcon } from './WeatherIcon'
import { getDate, getIcon, getTemp } from '../../utils'
import { Temp } from './Temp'
import { Date } from './Date'

interface IDailyForecastProp {
  daily: Array<IDaily>
}

export const DailyForecast = (props: IDailyForecastProp) => {
  const { daily } = props

  const keyExtractor = useCallback((item: IDaily) => item.dt.toString(), [])

  const renderItem = ({ item } : { item: IDaily }) => {
    console.log({ item }, item.weather[0].icon);
    
    return (
      <View style={styles.plate}>
        <Date date={getDate(item.dt)} />
        <WeatherIcon icon={getIcon(item.weather[0].icon)} styles={{ width: 80, height: 80 }} />
        <Temp temp={getTemp(item.temp.day)} styles={styles.temp} />
        <Temp temp={getTemp(item.temp.night)} styles={styles.temp} />
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
  temp: {
    fontSize: 18, 
    lineHeight: 22, 
    fontWeight: '400'
  },
  plate: {
    width: 90,
    marginRight: 16,
  }
})