import * as React from 'react'

import { ReservationResponse, ResevationListProps } from '../../types'
import ReservationListItem from './reservation-list-item'

const ReservationList = (props: ResevationListProps) => {
  const {
    reservationsQuery: { reservations },
  } = props
  if (typeof reservations === 'undefined') {
    return null
  }
  const list = reservations.map(
    (reservation: ReservationResponse, index: number) => {
      const key = index + 1
      return <ReservationListItem key={key} reservation={reservation} />
    }
  )
  return (
    <table className="reservation-list">
      <tbody>{list}</tbody>
    </table>
  )
}

export default ReservationList
