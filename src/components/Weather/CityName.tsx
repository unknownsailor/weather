import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { font } from '../../constants/fonts';

interface ICityNameProps {
  name: string
}

export const CityName = (props: ICityNameProps) => <Text style={styles.name}>{props.name}</Text>

const styles = StyleSheet.create({
  name: {
    fontFamily: font.AZERET_MONO_REGULAR,
    fontSize: 32,
    lineHeight: 36,
    textAlign: 'center',
    marginVertical: 16,
    opacity: .6
  }
})