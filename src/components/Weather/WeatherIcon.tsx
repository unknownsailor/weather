import React from 'react'
import { Image, StyleSheet } from 'react-native'

interface IWeatherIconProps {
  icon: string
  styles?: object
}

export const WeatherIcon = (props: IWeatherIconProps) => {

  return <Image style={[styles.icon, props.styles]} source={{ uri: props.icon }} />
}

const styles = StyleSheet.create({
  icon: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  }
})