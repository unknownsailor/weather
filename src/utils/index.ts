import AsyncStorage from '@react-native-async-storage/async-storage';
import { format } from "date-fns";
import { isObject } from 'lodash';
import { NativeModules, Platform } from 'react-native';
import { IconName } from '../shared/Icon';
import { cs, uk } from 'date-fns/locale';

export const deviceLocale = () => {
  if (Platform.OS === 'ios') {
    return (
      NativeModules.SettingsManager.settings.AppleLocale || NativeModules.SettingsManager.settings.AppleLanguages[0]
    ); // iOS 13
  }

  return NativeModules.I18nManager.localeIdentifier;

}

export const getDate = (date: number) => format(new Date(date * 1000), 'ccccc')
// export const getDate = (date: number) => format(new Date(date * 1000), 'ccccc', {locale: cs})

export const getTemp = (temp: number) => Math.round(temp).toString()

export const getIcon = (icon: string) => {
  switch(icon) {
    case '01d':
      return IconName.Sun
    case '01n':
      return IconName.Moon
    case '02d':
      return IconName.CloudSun
    case '02n':
      return IconName.CloudMoon
    case '03n':
    case '03d':
      return IconName.Cloud
    case '04d':
    case '04n':
      return IconName.Clouds
    case '09d':
    case '09n':
      return IconName.CloudShowersHeavy
    case '10d':
      return IconName.CloudSunRain
    case '10n':
      return IconName.CloudMoonRain
    case '11d':
    case '11n':
      return IconName.CloudBolt
    case '13d':
    case '13n':
      return IconName.Snowflake
    case '50d':
    case '50n':
      return IconName.Smog
    default:
      return null
  }
}

export async function setToAsyncStorage(key: string, value: any) {
  try {
    if (isObject(value)) {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, jsonValue)
    } else {
      await AsyncStorage.setItem(key, value)
    }
  } catch (e) {
    console.error(e)
  }
}

export async function getFromAsyncStorage(key: string) {
  let res: any
  try {
    const value = await AsyncStorage.getItem(key)
    if (value !== null) {
      res = value
    }
    return res
  } catch (e) {
    console.error(e)
  }
}

export async function removeFromAsyncStorage(key: string) {
  try {
    return await AsyncStorage.removeItem(key)
  } catch (e) {
    console.error(e)
  }
}

export async function clearAsyncStorage() {
  return AsyncStorage.clear()
}
