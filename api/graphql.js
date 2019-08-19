const { ApolloServer, gql } = require('apollo-server-lambda')

const typeDefs = gql`
  type Query {
    hello: String!
  }
`

// map the types 
const resolvers = {
  Query: {
    // Resolves the query -> hello
    hello: () => 'world!'
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true
})

// when this is called it expects a function with a signuature
exports.handler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true
  }
})