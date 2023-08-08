import React from 'react'
import { StyleSheet, Text } from 'react-native'

interface ITempProps {
  temp: string
  styles?: object
}

export const Temp = (props: ITempProps) => {


  return <Text style={[styles.text, props.styles]}>{props.temp}&#176;</Text>
}

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
    lineHeight: 54,
    fontWeight: '900',
    textAlign: 'center'
  }
})