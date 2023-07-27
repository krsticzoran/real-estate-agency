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
    sale: { type: GraphQLString },
    num: { type: GraphQLInt },
    place: { type: GraphQLString },
    price: { type: GraphQLInt },
    square: { type: GraphQLInt },
    time: { type: GraphQLInt },
    img: { type: GraphQLString },
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
      item: {
        type: RealEstateType,
        args: { num: { type: GraphQLInt } },
        resolve(parentValue, args) {
          return collection.findOne({ num: args.num });
        },
      },
    },
  });

  return new GraphQLSchema({
    query: RealEstateQuery,
  });
}

export { schemaRealEstate };
