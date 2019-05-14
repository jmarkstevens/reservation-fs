import * as React from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

import { AppContext } from '../../containers/app'
import { MutationProp } from '../../types'

const initState = {
  arrivalDate: new Date(),
  departureDate: new Date(),
  hotelName: '',
  name: '',
  cancel: false,
  success: false,
}

interface State {
  arrivalDate: Date;
  departureDate: Date;
  hotelName: string;
  name: string;
  cancel: boolean;
  success: boolean;
}

const CancelThis = ({
  cancel,
  success,
}: {
  cancel: boolean;
  success: boolean;
}): null => {
  const {
    changeNewResevationSuccess,
    changeShowAddReservation,
  } = React.useContext(AppContext)
  if (cancel) {
    changeShowAddReservation()
  }
  if (success) {
    changeNewResevationSuccess()
  }
  return null
}

export class ReservationNewComponent extends React.PureComponent<
  MutationProp,
  State
> {
  public state = initState

  public onCancel = (): void => {
    this.setState({ cancel: true })
  }

  public onSave = (): void => {
    const { mutate } = this.props
    const { arrivalDate, departureDate, hotelName, name } = this.state
    const reservation = {
      name,
      hotelName,
      arrivalDate: arrivalDate.toLocaleDateString(),
      departureDate: departureDate.toLocaleDateString(),
    }
    mutate({
      variables: reservation,
    }).then(({ data: { createReservation } }) => {
      if (createReservation) {
        this.setState({ cancel: true, success: true })
      } else {
        this.onCancel()
      }
    })
  }
  public render() {
    const {
      arrivalDate,
      cancel,
      departureDate,
      hotelName,
      success,
    } = this.state
    return (
      <div className="reservation-new">
        <div className="reservation-new-input">
          <div className="reservation-new-r">Name:</div>
          <div>
            <input
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                this.setState({ name: e.currentTarget.value })
              }
            />
          </div>
        </div>
        <div className="reservation-new-input">
          <div className="reservation-new-r">Hotel:</div>
          <div>
            <select
              onChange={(e: React.FormEvent<HTMLSelectElement>) =>
                this.setState({ hotelName: e.currentTarget.value })
              }
              value={hotelName}
            >
              <option value="Hilton Anaheim">Hilton Anaheim</option>
              <option value="Hilton Anchorage">Hilton Anchorage</option>
              <option value="Hilton Bellevue">Hilton Bellevue</option>
              <option value="Hilton Concord">Hilton Concord</option>
            </select>
          </div>
        </div>
        <div className="reservation-new-input">
          <div className="reservation-new-r">Arrival:</div>
          <div>
            <DatePicker
              selected={arrivalDate}
              onChange={(date: Date) => this.setState({ arrivalDate: date })}
            />
          </div>
        </div>
        <div className="reservation-new-input">
          <div className="reservation-new-r">Departure:</div>
          <div>
            <DatePicker
              selected={departureDate}
              onChange={(date: Date) => this.setState({ departureDate: date })}
            />
          </div>
        </div>
        <div className="reservation-new-submit">
          <button onClick={this.onCancel}>Cancel</button>
          <button onClick={this.onSave}>Submit</button>
        </div>
        <CancelThis cancel={cancel} success={success} />
      </div>
    )
  }
}

export default ReservationNewComponent
