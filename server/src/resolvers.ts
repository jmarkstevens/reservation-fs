interface iId {
  id: string;
}
interface iKey {
  key: string;
}
interface iRedis {
  redis: any;
}
interface iReservation {
  id: string;
  name: string;
  hotelName: string;
  arrivalDate: string;
  departureDate: string;
}
interface iNewReservation {
  data: {
    id: string;
    name: string;
    hotelName: string;
    arrivalDate: string;
    departureDate: string;
  };
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
    getOneReservation: async (parent: any, { id }: iId, { redis }: iRedis) => {
      try {
        if (id === '0') {
          return null
        }
        const value = await redis.get('reservations')
        const list = JSON.parse(value)
        const one = list.find((item: iReservation) => item.id === id)
        return one
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
    createReservation: async (
      parent: any,
      { data }: iNewReservation,
      { redis }: iRedis
    ) => {
      try {
        const newReservation = data
        newReservation.id = await redis.get('nextID')
        const nextNum = parseInt(newReservation.id, 10) + 1
        await redis.set('nextID', nextNum)
        const reservationsString = await redis.get('reservations')
        const reservations = JSON.parse(reservationsString)
        reservations.push(newReservation)
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
