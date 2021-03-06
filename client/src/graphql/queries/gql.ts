import gql from 'graphql-tag'

export const reservationsQuery = gql`
  query {
    reservations: getReservations {
      id
      name
      hotelName
      arrivalDate
      departureDate
    }
  }
`

export const oneReservationQuery = gql`
  query getOneReservation($id: String!) {
    reservation: getOneReservation(id: $id) {
      id
      name
      hotelName
      arrivalDate
      departureDate
    }
  }
`

export const createReservation = gql`
  mutation createReservation(
    $name: String!
    $hotelName: String!
    $arrivalDate: String!
    $departureDate: String!
  ) {
    createReservation(
      data: {
        id: ""
        name: $name
        hotelName: $hotelName
        arrivalDate: $arrivalDate
        departureDate: $departureDate
      }
    )
  }
`
