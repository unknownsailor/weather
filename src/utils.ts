import { format, formatDistance, formatRelative, subDays } from 'date-fns'

export const getDate = (date: number) => format(new Date(date * 1000), 'EEE')

export const getTemp = (temp: number) => Math.round(temp).toString()