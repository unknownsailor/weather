import React, { createContext, useEffect, useState } from 'react'
import { Units } from '../enums/Units'
import { getFromAsyncStorage, setToAsyncStorage } from '../utils'

export interface IUnitsContext {
  units: Units
  changeUnits: (value: Units) => void
}

export const UnitsContext = createContext({
  units: Units.METRIC,
  changeUnits: (value: Units) => {}
})

interface IUnitsProvider {
  children: JSX.Element
}

export const UnitsProvider = (props: IUnitsProvider) => {
  const [units, setUnits] = useState<Units>(Units.METRIC)

  const changeUnits = (value: Units) => {
    setUnits(value)
    setToAsyncStorage('units', value)
  }

  useEffect(() => {
    (async () => {
      const _units = await getFromAsyncStorage('units')
      console.log({ _units });
      if(typeof _units === 'undefined') {
        setToAsyncStorage('units', units)
      } else {
        setUnits(_units)
      }
    })()
  }, [])

  const value = { units, changeUnits }

  return <UnitsContext.Provider value={value}>{props.children}</UnitsContext.Provider>
}