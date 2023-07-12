import { GraphQLObjectType, GraphQLString, GraphQLSchema } from "graphql";
import { Collection, Db } from "mongodb";

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    user: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    overview: { type: GraphQLString },
  },
});

function schema(database: Db): GraphQLSchema {
  const collection: Collection = database.collection("staff");

  const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      user: {
        type: UserType,
        args: { user: { type: GraphQLString } },
        resolve(parentValue, args) {
          return collection.findOne({ user: args.user });
        },
      },
    },
  });

  return new GraphQLSchema({
    query: RootQuery,
  });
}

export { schema };
