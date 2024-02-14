
export const typeDefs = `#graphql
  type User {
    id: Int
    name: String
    email: String
    password: String
  }

  type Query {
    users: [User]
  }
`;