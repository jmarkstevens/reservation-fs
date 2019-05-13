import * as React from 'react'

import { AppContext } from '../../../containers/app'
import { ReservationResponse } from '../../../types'

interface listProps {
  reservation: ReservationResponse;
}

const ReservationListItem = ({ reservation }: listProps) => {
  const { id, name, hotelName } = reservation
  const { changeSelectedReservation } = React.useContext(AppContext)
  return (
    <tr
      className="reservation-list-item"
      onClick={() => changeSelectedReservation(id)}
      onKeyPress={changeSelectedReservation}
      role="button"
      tabIndex={0}
    >
      <td>{name}</td>
      <td>{hotelName}</td>
    </tr>
  )
}

export default ReservationListItem
