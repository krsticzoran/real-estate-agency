const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLInt,
} = require("graphql");
const { Collection, Db } = require("mongodb");

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    user: { type: GraphQLString },
    name: { type: GraphQLString },
    language: { type: GraphQLString },
    email: { type: GraphQLString },
    overview: { type: GraphQLString },
    phone: { type: GraphQLString },
    listings: { type: GraphQLInt },
    experience: { type: GraphQLString },
    propreties: { type: GraphQLInt },
    img: { type: GraphQLString },
  }),
});

const StaffType = new GraphQLObjectType({
  name: "Staff",
  fields: () => ({
    users: { type: new GraphQLList(UserType) },
  }),
});

function schema(database) {
  const collection = database.collection("staff");

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

module.exports = { schema };
