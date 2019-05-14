import * as React from 'react'

import AppComponent from '../../components/app'

export interface AppContextInterface {
  changeNewResevationSuccess: any;
  changeSelectedReservation: any;
  changeShowAddReservation: any;
  newResevationSuccess: boolean;
  selectedReservation: string;
  showAddReservation: boolean;
}

export const AppContext = React.createContext<AppContextInterface | null>(null)

const AppContainer = () => {
  const [newResevationSuccess, setNewResevationSuccess] = React.useState(false)
  const [showAddReservation, setShowAddReservation] = React.useState(false)
  const [selectedReservation, setSelectedReservation] = React.useState('0')

  const changeSelectedReservation = (id: string) => setSelectedReservation(id)
  const changeShowAddReservation = () =>
    setShowAddReservation(!showAddReservation)
  const changeNewResevationSuccess = () =>
    setNewResevationSuccess(!newResevationSuccess)

  return (
    <AppContext.Provider
      value={{
        changeNewResevationSuccess,
        changeSelectedReservation,
        changeShowAddReservation,
        newResevationSuccess,
        selectedReservation,
        showAddReservation,
      }}
    >
      <AppComponent
        selectedReservation={selectedReservation}
        showAddReservation={showAddReservation}
      />
    </AppContext.Provider>
  )
}

export default AppContainer
