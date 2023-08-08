import { Platform } from 'react-native'
import { check, request, PERMISSIONS, openSettings, openLimitedPhotoLibraryPicker } from 'react-native-permissions'

const PLATFORM_LOCATION_WHEN_IN_USE = {
  ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
  android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
}

const REQUEST_PERMISSION_TYPE = {
  location: PLATFORM_LOCATION_WHEN_IN_USE,
}

enum PERMISSION_TYPE {
  location = 'location',
}

class AppPermission {
  checkPermission = async (type: PERMISSION_TYPE) => {
    const platform = Platform.OS
    const permission = platform === 'ios' || platform === 'android' ? REQUEST_PERMISSION_TYPE[type][platform] : null

    if (!permission) {
      return null
    }

    try {
      const result = await check(permission)
      return result
    } catch (error) {
      console.log({ checkPermissionError: error })
      return null
    }
  }

  requestPermission = async (type: PERMISSION_TYPE) => {
    const platform = Platform.OS
    const permission = platform === 'ios' || platform === 'android' ? REQUEST_PERMISSION_TYPE[type][platform] : null

    if (!permission) {
      return null
    }

    try {
      const response = await request(permission)
      return response
    } catch (error) {
      console.log({ requestPermissionError: error })
      return false
    }
  }

  openSettings = () => {
    openSettings()
  }

  openLimitedPhotoLibraryPicker = () => {
    openLimitedPhotoLibraryPicker()
  }
}

const Permission = new AppPermission()
export { Permission, PERMISSION_TYPE }
