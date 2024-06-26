import api, { Entry } from "./api"

export async function getRealtors() {
    const { data: realtors } = await api.realtors.get(
      {
        query: {
          fields: [
            'firstName',
            'lastName',
            'email',
            'bio',
          ],
        },
      },
    )
    return realtors || {}
  }

type City = Entry<{ name: string }>

type Realtor = {
  firstName: string
  lastName: string
  bio: string
  email: string
  city: City
}

type GetRealtorResponse = {
    id: number
    attributes: Realtor
  }[]

export interface GetRealtorsTypes {
  GetRealtorResponse: GetRealtorResponse
  Realtor: Realtor
}