/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaView, StatusBar, StyleSheet, useColorScheme } from 'react-native'

import LinearGradient from 'react-native-linear-gradient'
import ErrorBoundary from './ErrorBoundary'
import { color } from './constants/colors'
import { UnitsProvider } from './providers/UnitsProvider'
import { Screen } from './screens/Screen'
import { useEffect } from 'react'
import * as BootSplash from 'react-native-bootsplash'

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <ErrorBoundary>
      <UnitsProvider>
        <LinearGradient
          style={styles.container}
          colors={isDarkMode ? color.purpleGradient : color.blueGradient}
          useAngle={true}
          angle={isDarkMode ? 225 : 45}
        >
          <SafeAreaView style={{ flex: 1 }}>
            <StatusBar translucent backgroundColor="transparent" />
            <Screen />
          </SafeAreaView>
        </LinearGradient>
      </UnitsProvider>
    </ErrorBoundary>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App
