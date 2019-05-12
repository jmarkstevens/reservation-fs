import * as React from 'react'

import { ResevationListProps } from '../../types'

const ReservationList = (props: ResevationListProps) => {
  const {
    reservationsQuery: { reservations },
  } = props
  console.log('ReservationList reservations:', reservations)
  return <div>ReservationList</div>
}

export default ReservationList
