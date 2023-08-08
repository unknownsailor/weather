import React from 'react'
import { StyleSheet, Text } from 'react-native'

interface IDateProps {
  date: string
}

export const Date = (props: IDateProps) => <Text style={styles.text}>{props.date}</Text>

const styles = StyleSheet.create({
  text: {
    textAlign: 'center'
  }
})