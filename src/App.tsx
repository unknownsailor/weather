/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import { SafeAreaView, StatusBar, View, useColorScheme } from 'react-native'

import { Colors } from 'react-native/Libraries/NewAppScreen'
import ErrorBoundary from './ErrorBoundary'
import { Screen } from './screens/Screen'
import { UnitsProvider } from './providers/UnitsProvider'

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <ErrorBoundary>
      <UnitsProvider>
        <View style={{ flex: 1 }}>
          <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <StatusBar
              barStyle={isDarkMode ? 'light-content' : 'dark-content'}
              backgroundColor={backgroundStyle.backgroundColor}
            />
            <Screen />
          </SafeAreaView>
        </View>
      </UnitsProvider>
    </ErrorBoundary>
  )
}

export default App
