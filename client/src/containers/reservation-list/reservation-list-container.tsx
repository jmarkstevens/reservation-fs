import * as React from 'react'
import { graphql } from 'react-apollo'

import ReservationList from '../../components/reservation-list'
import { reservationsQuery } from '../../graphql/queries'
import { ResevationListProps } from '../../types'

const withQuery = graphql<ResevationListProps>(reservationsQuery, {
  name: 'reservationsQuery',
})

export default withQuery(ReservationList)
