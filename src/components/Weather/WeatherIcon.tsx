import { color } from '../../constants/colors'
import { Icon, IconName } from '../../shared/Icon'

interface IWeatherIconProps {
  icon: IconName
  size?: number
}

export const WeatherIcon = (props: IWeatherIconProps) => {
  return <Icon name={props.icon} color={color.gray50} size={props.size} />
}
