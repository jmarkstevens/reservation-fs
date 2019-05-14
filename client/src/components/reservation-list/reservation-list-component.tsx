import * as React from 'react'

import { AppContext } from '../../containers/app'
import { ReservationResponse, ResevationListProps } from '../../types'
import ReservationListItem from './reservation-list-item'

const ReservationList = (props: ResevationListProps) => {
  const {
    reservationsQuery: { refetch, reservations },
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
  const {
    changeNewResevationSuccess,
    changeShowAddReservation,
    newResevationSuccess,
  } = React.useContext(AppContext)
  if (newResevationSuccess) {
    refetch()
    changeNewResevationSuccess()
  }
  return (
    <div className="reservation-list">
      <table>
        <tbody>{list}</tbody>
      </table>
      <div className="reservation-new-submit">
        <button onClick={changeShowAddReservation}>New Reservation</button>
      </div>
    </div>
  )
}

export default ReservationList
