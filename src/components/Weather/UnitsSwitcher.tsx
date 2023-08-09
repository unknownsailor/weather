import React from 'react';
import { Units } from '../../enums/Units';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { font } from '../../constants/fonts';
import { Icon, IconName } from '../../shared/Icon';

interface IUnitsSwitcherProps {
  units: Units,
  onUnits: (value: Units) => void
}

export const UnitsSwitcher = (props: IUnitsSwitcherProps) => {
  const { units, onUnits } = props

  const button = [
    { icon: IconName.Celsius, value: Units.METRIC },
    { icon: IconName.Celsius, value: Units.IMPERIAL },
  ]

  return (
    <View style={styles.container}>
      {
        button.map(button => {
          return (
            <Pressable key={button.value} style={[styles.block, button.value === Units.METRIC && { marginRight: 8 }]} disabled={button.value === units} onPress={() => onUnits(button.value)}>
              <Icon name={button.icon} size={18} color={button.value === units ? '#000' : 'gray'} />
            </Pressable>
          )
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    zIndex: 999999,
    marginTop: Platform.OS === 'android' ? 32 : 0,
    paddingHorizontal: 16,
  },
  block: {
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  text: {
    fontFamily: font.AZERET_MONO_REGULAR,
    fontSize: 16,
    lineHeight: 18,
  }
})