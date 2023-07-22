import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLInt,
  GraphQLBoolean,
} from "graphql";
import { Collection, Db } from "mongodb";

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    user: { type: GraphQLString },
    name: { type: GraphQLString },
    language: { type: GraphQLString },
    email: { type: GraphQLString },
    overview: { type: GraphQLString },
    phone: { type: GraphQLString },
    listings: { type: GraphQLInt },
    experience: { type: GraphQLString },
    propreties: { type: GraphQLInt },
  },
});

const StaffType = new GraphQLObjectType({
  name: "Staff",
  fields: {
    users: { type: new GraphQLList(UserType) },
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
      staff: {
        type: StaffType,
        async resolve() {
          const users = await collection.find().toArray();
          return { users };
        },
      },
    },
  });

  return new GraphQLSchema({
    query: RootQuery,
  });
}

export { schema };
