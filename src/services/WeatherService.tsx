import { AxiosInstance } from 'axios'
import { api } from './api'
import { API_ID } from '@env'
import { makeObservable, observable } from 'mobx'
import Geolocation from 'react-native-geolocation-service'
import { ICurrent } from '../interfaces/ICurrent'
import { IDaily } from '../interfaces/IDaily'

export class WeatherService {
  private readonly request: AxiosInstance

  @observable loading = {
    location: true,
    current: true,
    daily: true,
  }

  @observable latitude: number = 0
  @observable longitude: number = 0

  @observable current = {} as ICurrent
  @observable daily: Array<IDaily> = []

  constructor() {
    makeObservable(this)
    this.request = api
  }

  getLocation = async () => {
    this.loading.location = true
    await Geolocation.getCurrentPosition(
      async position => {
        const {
          coords: { latitude, longitude },
        } = position
        this.latitude = latitude
        this.longitude = longitude
        this.loading.location = false
        this.currentForecast()
        this.dailyForecast()
      },
      error => {
        console.log(error.code, error.message)
      },
      { enableHighAccuracy: false, timeout: 15000, maximumAge: 10000 }
    )
  }

  currentForecast = async (latitude = this.latitude, longitude = this.longitude) => {
    console.log(latitude, longitude)

    try {
      const { data } = await this.request.get(`weather?lat=${latitude}&lon=${longitude}&appid=${API_ID}&units=metric`)
      this.current = data
    } catch (exception) {
    } finally {
      this.loading.current = false
    }
  }

  dailyForecast = async (latitude = this.latitude, longitude = this.longitude) => {
    try {
      const { data } = await this.request.get(`onecall?lat=${latitude}&lon=${longitude}&appid=${API_ID}&units=metric`)
      this.daily = data.daily
    } catch (exception) {
    } finally {
      this.loading.daily = false
    }
  }

}
