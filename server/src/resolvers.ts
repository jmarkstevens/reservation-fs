interface iKey {
  key: string;
}
interface iRedis {
  redis: any;
}
interface iReservation {
  id: number;
  name: string;
  hotelName: string;
  arrivalDate: string;
  departureDate: string;
}
interface iReservations {
  reservations: iReservation[];
}
interface iKeyValue {
  key: string;
  value: string;
}

export default {
  Query: {
    testMessage: (): string => {
      return 'Hello World!'
    },
    getReservations: async (parent: any, { key }: iKey, { redis }: iRedis) => {
      try {
        const value = await redis.get('reservations')
        return JSON.parse(value)
      } catch (error) {
        return null
      }
    },
    get: (parent: any, { key }: iKey, { redis }: iRedis) => {
      try {
        return redis.get(key)
      } catch (error) {
        return null
      }
    },
  },

  Mutation: {
    setReservations: async (
      parent: any,
      { reservations }: iReservations,
      { redis }: iRedis
    ) => {
      try {
        await redis.set('reservations', JSON.stringify(reservations))
        return true
      } catch (error) {
        console.log(error)
        return false
      }
    },
    set: async (parent: any, { key, value }: iKeyValue, { redis }: iRedis) => {
      try {
        await redis.set(key, value)
        return true
      } catch (error) {
        console.log(error)
        return false
      }
    },
  },
}
