import * as React from 'react'

import { ResevationDetailProps } from '../../types'

const ReservationDetailComponent = (props: ResevationDetailProps) => {
  const {
    oneReservation: { reservation },
  } = props
  if (typeof reservation === 'undefined') {
    return null
  }
  const { id, name, hotelName, arrivalDate, departureDate } = reservation
  return (
    <div className="reservation-detail">
      <table>
        <tbody>
          <tr>
            <td className="reservation-detail-tdl">id:</td>
            <td>{id}</td>
          </tr>
          <tr>
            <td className="reservation-detail-tdl">Name:</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td className="reservation-detail-tdl">Hotel:</td>
            <td>{hotelName}</td>
          </tr>
          <tr>
            <td className="reservation-detail-tdl">Arrival:</td>
            <td>{arrivalDate}</td>
          </tr>
          <tr>
            <td className="reservation-detail-tdl">Departure:</td>
            <td>{departureDate}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ReservationDetailComponent
