import { gql } from 'apollo-server'

export default gql`
  type Query {
    testMessage: String!

    get(key: String!): String

    getOneReservation(id: String!): Reservation!

    getReservations: [Reservation!]
  }

  type Mutation {
    set(key: String!, value: String!): Boolean!

    setReservations(reservations: [iReservation]): Boolean!
  }

  type Reservation {
    id: String!
    name: String!
    hotelName: String!
    arrivalDate: String!
    departureDate: String!
  }

  input iReservation {
    id: String!
    name: String!
    hotelName: String!
    arrivalDate: String!
    departureDate: String!
  }
`
