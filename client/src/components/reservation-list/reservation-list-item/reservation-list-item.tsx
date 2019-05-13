import * as React from 'react'

import { ReservationResponse } from '../../../types'

interface listProps {
  reservation: ReservationResponse;
}

const ReservationListItem = ({ reservation }: listProps) => {
  const { name, hotelName } = reservation
  return (
    <tr className="reservation-list-item">
      <td>{name}</td>
      <td>{hotelName}</td>
    </tr>
  )
}

export default ReservationListItem
