import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

interface IOpenSettingProps {
  openSetting: () => void
}

export const OpenSettingScreen = (props: IOpenSettingProps) => {
  return (
    <View style={styles.container}>
      <Text>You don't allowed location permission</Text>
      <Button title="Open settings" onPress={props.openSetting} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
})
