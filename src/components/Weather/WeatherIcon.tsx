import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Icon, IconName } from '../../shared/Icon'

interface IWeatherIconProps {
  icon: IconName
  styles?: object
}

export const WeatherIcon = (props: IWeatherIconProps) => {
  
  return <View style={[styles.icon, props.styles]}><Icon name={props.icon} /></View>
}

const styles = StyleSheet.create({
  icon: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  }
})