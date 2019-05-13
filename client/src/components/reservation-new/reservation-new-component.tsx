import * as React from 'react'

import { AppContext } from '../../containers/app'
import { MutationProp } from '../../types'

const initState = {
  arrivalDate: '',
  departureDate: '',
  hotelName: '',
  name: '',
}

interface State {
  arrivalDate: string;
  departureDate: string;
  hotelName: string;
  name: string;
}

export class ReservationNewComponent extends React.PureComponent<
  MutationProp,
  State
> {
  public state = initState

  public onCancel = (): void => {
    const { changeShowAddReservation } = React.useContext(AppContext)
    changeShowAddReservation()
  }

  public onSave = (): void => {
    const { changeShowAddReservation } = React.useContext(AppContext)
    const { mutate } = this.props
    const { arrivalDate, departureDate, hotelName, name } = this.state
    const reservation = {
      name,
      hotelName,
      arrivalDate,
      departureDate,
    }
    mutate({
      variables: reservation,
    }).then(() => {
      this.onCancel()
    })
  }
  public render() {
    return <div />
  }
}

export default ReservationNewComponent
