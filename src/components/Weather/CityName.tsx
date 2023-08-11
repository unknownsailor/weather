import { StyleSheet, Text } from 'react-native'
import { color } from '../../constants/colors'
import { font } from '../../constants/fonts'

interface ICityNameProps {
  name: string
}

export const CityName = (props: ICityNameProps) => <Text style={styles.name}>{props.name}</Text>

const styles = StyleSheet.create({
  name: {
    fontFamily: font.EXO2_LIGHT,
    // fontFamily: font.AZERET_MONO_REGULAR,
    fontSize: 32,
    lineHeight: 36,
    color: color.gray100,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginVertical: 16,
  },
})
