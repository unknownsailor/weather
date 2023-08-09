import { useEffect, useRef, useState } from 'react'
import { AppState, Text } from 'react-native'
import { PermissionStatus, RESULTS } from 'react-native-permissions'
import { OpenSetting } from '../components/Weather/OpenSetting'
import { PERMISSION_TYPE, Permission } from '../shared/Permission'
import { WeatherScreen } from './WeatherScreen'

export const Screen = () => {
  const [hasPermission, setHasPermission] = useState<boolean>(true)
  const [permissionType, setPermissionType] = useState<PermissionStatus | null>(null)
  const appState = useRef(AppState.currentState)

  const checkPermission = async () => {
    const permission = await Permission.checkPermission(PERMISSION_TYPE.location)
    setPermissionType(permission)
    console.log({ permission })
    if (permission === RESULTS.GRANTED) {
      setHasPermission(true)
    } else if (permission === RESULTS.DENIED) {
      Permission.requestPermission(PERMISSION_TYPE.location)
      setHasPermission(false)
    } else {
      setHasPermission(false)
    }
  }

  useEffect(() => {
    checkPermission()

    const subscription = AppState.addEventListener('change', nextAppState => {
      if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
        checkPermission()
      }

      appState.current = nextAppState
    })

    return () => {
      subscription.remove()
    }
  }, [])

  if (permissionType === RESULTS.DENIED || permissionType === null) {
    return <Text>Loading</Text>
  }

  return hasPermission ? <WeatherScreen /> : <OpenSetting openSetting={Permission.openSettings} />
}
