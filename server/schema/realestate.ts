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
  name: "RealEstate",
  fields: {
    property: { type: GraphQLString },
    rez: { type: GraphQLString },
    sale: { type: GraphQLString },
    num: { type: GraphQLInt },
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
          property: { type: GraphQLString },
          sale: { type: GraphQLString },
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
