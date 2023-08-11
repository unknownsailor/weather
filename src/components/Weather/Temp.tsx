import { StyleSheet, Text } from 'react-native'
import { color } from '../../constants/colors'
import { font } from '../../constants/fonts'

interface ITempProps {
  temp: string
  styles?: object
}

export const Temp = (props: ITempProps) => {
  return <Text style={[styles.text, props.styles]}>{`${props.temp}\u00B0`}</Text>
}

const styles = StyleSheet.create({
  text: {
    fontFamily: font.EXO2_LIGHT,
    fontSize: 18,
    lineHeight: 22,
    color: color.white,
    textAlign: 'center',
  },
})
