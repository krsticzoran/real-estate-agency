import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLInt,
  GraphQLBoolean,
} from "graphql";
import { Collection, Db } from "mongodb";

const RealEstateType = new GraphQLObjectType({
  name: "RealEstate", // Change the name to "RealEstate"
  fields: {
    property: { type: GraphQLString },
    rez: { type: GraphQLString },
    sale: { type: GraphQLBoolean },
  },
});

function schemaRealEstate(database: Db): GraphQLSchema {
  const collection: Collection = database.collection("realestate");

  const RealEstateQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      property: {
        type: new GraphQLList(RealEstateType),
        args: {
          property: { type: GraphQLString }, // Argument to filter by property name
          sale: { type: GraphQLBoolean }, // Argument to filter by sale status
        },
        async resolve(parentValue, args) {
          const properties = await collection.find(args).toArray();
          return properties;
        },
      },
    },
  });

  return new GraphQLSchema({
    query: RealEstateQuery,
  });
}

export { schemaRealEstate };
