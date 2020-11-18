import { gql } from 'graphql-modules'

enum Status {
    PENDING,
    REJECTED,
    ACCEPTED,
    ONGOING,
    AWAITING_PAYMENT,
    DONE
}

export const typeDefs = gql`
    type Session {
        id: ID!
        name: String
        status: Status
        efurrax: int 
        user: int 
        date: Date
        rating: int
        createdAt: Date
        updatedAt: Date
    }
`

