import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLInt,
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
    specialist: { type: GraphQLString },
    img1: { type: GraphQLString },
    img2: { type: GraphQLString },
    img3: { type: GraphQLString },
  },
});

function schemaRealEstate(database: Db): GraphQLSchema {
  const collection: Collection = database.collection("realestate");

  const RealEstateQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      item: {
        type: RealEstateType,
        args: { num: { type: GraphQLInt } },
        resolve(parentValue, args) {
          return collection.findOne({ num: args.num });
        },
      },
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
      search: {
        type: new GraphQLList(RealEstateType),
        args: {
          property: { type: GraphQLString },
          sale: { type: GraphQLString },
          place: { type: GraphQLString },
          minPrice: { type: GraphQLInt },
          maxPrice: { type: GraphQLInt },
        },
        async resolve(parentValue, args) {
          const { property, sale, place, minPrice, maxPrice } = args;

          // Prepare the search filter based on provided arguments
          const searchFilter: any = {};
          if (property && property.toLowerCase() !== "all") {
            searchFilter.property = property;
          }
          if (place && place.toLowerCase() !== "all") {
            searchFilter.place = place;
          }
          if (sale) {
            searchFilter.sale = sale;
          }
          if (minPrice !== undefined && maxPrice !== undefined) {
            searchFilter.price = { $gte: minPrice, $lte: maxPrice };
          } else if (minPrice !== undefined) {
            searchFilter.price = { $gte: minPrice };
          } else if (maxPrice !== undefined) {
            searchFilter.price = { $lte: maxPrice };
          }

          const properties = await collection.find(searchFilter).toArray();
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
