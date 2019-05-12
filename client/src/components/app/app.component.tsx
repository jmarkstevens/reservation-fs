import * as React from 'react'

import ReservationContainer from '../../containers/reservation-list'

interface Props {}

const AppComponent: React.FunctionComponent<Props> = () => {
  return (
    <div className="app-container">
      <ReservationContainer reservationsQuery={null} />
    </div>
  )
}

export default AppComponent
