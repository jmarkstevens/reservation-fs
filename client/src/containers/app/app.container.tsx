import * as React from 'react'

import AppComponent from '../../components/app'

export interface AppContextInterface {
  changeExamplePage: any;
  changeShowAddReservation: any;
  examplePage: number;
  showAddReservation: boolean;
}

export const AppContext = React.createContext<AppContextInterface | null>(null)

const AppContainer = () => {
  const [showAddReservation, setShowAddReservation] = React.useState(false)
  const [examplePage, setExamplePage] = React.useState(1)

  const changeExamplePage = (index: number) => setExamplePage(index)
  const changeShowAddReservation = () =>
    setShowAddReservation(!showAddReservation)

  return (
    <AppContext.Provider
      value={{
        changeExamplePage,
        changeShowAddReservation,
        examplePage,
        showAddReservation,
      }}
    >
      <AppComponent showAddReservation={showAddReservation} />
    </AppContext.Provider>
  )
}

export default AppContainer
