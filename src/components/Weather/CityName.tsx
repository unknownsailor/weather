import React from 'react';
import { StyleSheet, Text } from 'react-native';

interface ICityNameProps {
  name: string
}

export const CityName = (props: ICityNameProps) => <Text style={styles.name}>{props.name}</Text>

const styles = StyleSheet.create({
  name: {
    fontSize: 32,
    lineHeight: 36,
    fontWeight: '600',
    textTransform: 'uppercase',
    textAlign: 'center',
    marginVertical: 16,
  }
})