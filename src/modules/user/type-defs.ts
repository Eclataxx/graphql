import { gql } from 'graphql-modules'

enum Role {
   USER,
   ADMIN,
}
enum Status {
    VIBIN,
    SUSPENTED,
    BANNED
}

export const typeDefs = gql`
    type User {
        id: ID!
        username: String
        email: String!
        password: String
        status: Status
        role: Role
        rating: int
        sessions: [Session]
        createdAt: Date
        updatedAt: Date
    }
`
