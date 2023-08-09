import { Platform, Pressable, StyleSheet, View } from 'react-native';
import { color } from '../../constants/colors';
import { Units } from '../../enums/Units';
import { Icon, IconName } from '../../shared/Icon';

interface IUnitsSwitcherProps {
  units: Units,
  onUnits: (value: Units) => void
}

export const UnitsSwitcher = (props: IUnitsSwitcherProps) => {
  const { units, onUnits } = props

  const button = [
    { icon: IconName.Celsius, value: Units.METRIC },
    { icon: IconName.Fahrenheit, value: Units.IMPERIAL },
  ]

  return (
    <View style={styles.container}>
      {
        button.map(button => {
          return (
            <Pressable key={button.value} style={[styles.block, button.value === Units.METRIC && { marginRight: 8 }]} disabled={button.value === units} onPress={() => onUnits(button.value)}>
              <Icon name={button.icon} size={36} color={button.value === units ? color.white : color.gray200} />
            </Pressable>
          )
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: Platform.OS === 'android' ? 32 : 0,
    paddingHorizontal: 16,
  },
  block: {
    padding: 4,
  },
})