import { StyleSheet, Text } from 'react-native'
import { color } from '../../constants/colors'
import { font } from '../../constants/fonts'

interface IDateProps {
  date: string
}

export const Date = (props: IDateProps) => <Text style={styles.text}>{props.date}</Text>

const styles = StyleSheet.create({
  text: {
    fontFamily: font.EXO2_THIN,
    fontSize: 18,
    lineHeight: 22,
    color: color.gray50,
    textAlign: 'center',
  },
})
