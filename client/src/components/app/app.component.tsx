import * as React from 'react'

import ReservationListContainer from '../../containers/reservation-list'

interface Props {
  showDetail: boolean;
}

const AppComponent: React.FunctionComponent<Props> = () => {
  return (
    <div className="app-container">
      <ReservationListContainer reservationsQuery={null} />
    </div>
  )
}

export default AppComponent
