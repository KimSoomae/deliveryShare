const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

async function main(){
    const allUsers = await prisma.uSER.findMany()
    console.log(allUsers)
}
main()
    .catch((e) => {
        throw e
    })
    .finally(async ()=> {
        await prisma.$disconnect()
    })


const { ApolloServer, gql } = require('apollo-server')
const typeDefs = gql`

  type Query{
      users:[USER]
  }
  type USER{
      seq:Int
      id: String
      password:String
      name:String
      token:String
      status:String
  }

`
const resolvers = {
  Query: {
    users: () => database.users
  }
}
const server = new ApolloServer({ typeDefs, resolvers })
server.listen().then(({ url }) => {
console.log(`🚀  Server ready at ${url}`)
})