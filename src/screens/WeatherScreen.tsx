import { observer } from "mobx-react";
import { WeatherService } from "../services/WeatherService";
import { useEffect } from "react";

interface IWeatherProps {
  weather: WeatherService
}

export const WeatherScreen = observer((props: IWeatherProps) => {
  console.log(props.weather);
  
  useEffect(() => {
    props.weather.fetch()
  }, [])
  
  return <></>
})