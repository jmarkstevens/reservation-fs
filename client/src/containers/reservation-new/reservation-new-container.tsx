import * as React from 'react'
import { graphql } from 'react-apollo'

import ReservationNewComponent from '../../components/reservation-new'
import { createReservation } from '../../graphql/queries'
import { MutationPropNull } from '../../types'

const withMutation = graphql<MutationPropNull>(createReservation)

export default withMutation(ReservationNewComponent)
