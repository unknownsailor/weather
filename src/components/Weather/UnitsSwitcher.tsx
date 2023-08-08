import React from 'react';
import { Units } from '../../enums/Units';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface IUnitsSwitcherProps {
  units: Units,
  onUnits: (value: Units) => void
}

export const UnitsSwitcher = (props: IUnitsSwitcherProps) => {
  const { units, onUnits } = props

  const button = [
    { title: 'C \u00B0', value: Units.METRIC },
    { title: 'F\u00B0', value: Units.IMPERIAL },
  ]

  return (
    <View style={styles.container}>
      {
        button.map(button => {
          return (
            <Pressable key={button.value} style={[styles.block, button.value === Units.METRIC && { marginRight: 8 }]} disabled={button.value === units} onPress={() => onUnits(button.value)}>
              <Text style={[styles.text, units === button.value && { fontWeight: '600' }]}>{button.title}</Text>
            </Pressable>
          )
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999999,
  },
  block: {
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  text: {
    fontSize: 16,
    lineHeight: 18,
    fontWeight: '400',
  }
})