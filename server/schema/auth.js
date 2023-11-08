const { GraphQLObjectType, GraphQLString, GraphQLSchema } = require("graphql");
const { Collection, Db } = require("mongodb");

const AuthType = new GraphQLObjectType({
  name: "Auth",
  fields: () => ({
    user: { type: GraphQLString },
    password: { type: GraphQLString },
  }),
});

function schemaAuth(database) {
  const collection = database.collection("auth");

  const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      findUser: {
        type: AuthType,
        args: {
          user: { type: GraphQLString },
          password: { type: GraphQLString },
        },
        resolve(parentValue, args) {
          return collection.findOne({
            user: args.user,
            password: args.password,
          });
        },
      },
    },
  });

  return new GraphQLSchema({
    query: RootQuery,
  });
}

module.exports = { schemaAuth };
