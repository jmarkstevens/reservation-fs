import * as React from 'react'
import { graphql } from 'react-apollo'

import ReservationDetailComponent from '../../components/reservation-detail'
import { oneReservationQuery } from '../../graphql/queries'
import { ResevationDetailProps } from '../../types'

const withQuery = graphql<ResevationDetailProps>(oneReservationQuery, {
  name: 'oneReservation',
  options: props => ({
    variables: {
      id: props.selectedReservation,
    },
  }),
})

export default withQuery(ReservationDetailComponent)
