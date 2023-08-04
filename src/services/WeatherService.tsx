import { AxiosInstance } from "axios";
import { api } from "./api";
import { API_ID } from "@env";
import { makeObservable, observable } from "mobx";

export class WeatherService {
  private readonly request: AxiosInstance

  @observable loading: boolean = true

  constructor() {
    makeObservable(this)
    this.request = api
  }

  fetch = async () => {
    try {
      const { data } = await this.request.get(`weather?lat=46.4775&lon=30.7326&appid=${API_ID}`)
      
    } catch(exception) {

    }
  }
}