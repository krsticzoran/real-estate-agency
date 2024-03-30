const { GraphQLObjectType, GraphQLString, GraphQLSchema } = require("graphql");
const { Collection, Db } = require("mongodb");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretKey = process.env.SECRET_KEY;

const AuthType = new GraphQLObjectType({
  name: "Auth",
  fields: () => ({
    user: { type: GraphQLString },
    password: { type: GraphQLString },
    id: { type: GraphQLString },
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
          const token = jwt.sign({ user: args.user }, secretKey);

          return {
            user: args.user,
            password: args.password,
            id: token,
          };
        },
      },
    },
  });

  return new GraphQLSchema({
    query: RootQuery,
  });
}

module.exports = { schemaAuth };
