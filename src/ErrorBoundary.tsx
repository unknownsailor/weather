import React, { Component, ErrorInfo, ReactNode } from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
  children?: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  }

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Something went wrong</Text>
          <Text style={styles.text}>Please close the app and open it again.</Text>
        </View>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  text: {
    color: '#fff',
    marginVertical: 10,
  },
})
