import * as React from 'react'

import ReservationDetailContainer from '../../containers/reservation-detail'
import ReservationListContainer from '../../containers/reservation-list'
import ReservationNewContainer from '../../containers/reservation-new'

interface Props {
  selectedReservation: string;
  showAddReservation: boolean;
}

const AppComponent: React.FunctionComponent<Props> = ({
  selectedReservation,
  showAddReservation,
}) => {
  return (
    <div className="app-container">
      <div className="app-container-list">
        <ReservationListContainer reservationsQuery={null} />
      </div>
      <div className="app-container-detail">
        {showAddReservation && <ReservationNewContainer mutate={null} />}
        {!showAddReservation && (
          <ReservationDetailContainer
            oneReservation={null}
            selectedReservation={selectedReservation}
          />
        )}
      </div>
    </div>
  )
}

export default AppComponent
