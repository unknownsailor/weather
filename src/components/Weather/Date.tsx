import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { font } from '../../constants/fonts'

interface IDateProps {
  date: string
}

export const Date = (props: IDateProps) => <Text style={styles.text}>{props.date}</Text>

const styles = StyleSheet.create({
  text: {
    fontFamily: font.AZERET_MONO_REGULAR,
    fontSize: 18,
    lineHeight: 22,
    textAlign: 'center',
    color: '#000',
    opacity: .6
  }
})