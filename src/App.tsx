/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Appearance, SafeAreaView, StatusBar, View, useColorScheme } from 'react-native'

import { Colors } from 'react-native/Libraries/NewAppScreen'
import ErrorBoundary from './ErrorBoundary'
import { UnitsProvider } from './providers/UnitsProvider'
import { Screen } from './screens/Screen'
import { color } from './constants/colors'

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  console.log('theme', useColorScheme());
  console.log('Appearance', Appearance.getColorScheme());
  console.log({ isDarkMode });
  
  

  return (
    <ErrorBoundary>
      <UnitsProvider>
        <View style={{ flex: 1 }}>
          <SafeAreaView style={{ flex: 1 }}>
            <StatusBar
              translucent
              barStyle='default'
              backgroundColor='transparent'
            />
            <Screen />
          </SafeAreaView>
        </View>
      </UnitsProvider>
    </ErrorBoundary>
  )
}

export default App
