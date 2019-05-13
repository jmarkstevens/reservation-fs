import * as React from 'react'

import ReservationDetailContainer from '../../containers/reservation-detail'
import ReservationListContainer from '../../containers/reservation-list'

interface Props {
  selectedReservation: string;
}

const AppComponent: React.FunctionComponent<Props> = ({
  selectedReservation,
}) => {
  return (
    <div className="app-container">
      <div className="app-container-list">
        <ReservationListContainer reservationsQuery={null} />
      </div>
      <div className="app-container-detail">
        <ReservationDetailContainer
          oneReservation={null}
          selectedReservation={selectedReservation}
        />
      </div>
    </div>
  )
}

export default AppComponent
