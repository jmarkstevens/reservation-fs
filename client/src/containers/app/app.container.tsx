import * as React from 'react'

import AppComponent from '../../components/app'

export interface AppContextInterface {
  changeSelectedReservation: any;
  changeShowAddReservation: any;
  selectedReservation: number;
  showAddReservation: boolean;
}

export const AppContext = React.createContext<AppContextInterface | null>(null)

const AppContainer = () => {
  const [showAddReservation, setShowAddReservation] = React.useState(false)
  const [selectedReservation, setSelectedReservation] = React.useState(0)

  const changeSelectedReservation = (id: number) => setSelectedReservation(id)
  const changeShowAddReservation = () =>
    setShowAddReservation(!showAddReservation)

  return (
    <AppContext.Provider
      value={{
        changeSelectedReservation,
        changeShowAddReservation,
        selectedReservation,
        showAddReservation,
      }}
    >
      <AppComponent />
    </AppContext.Provider>
  )
}

export default AppContainer
