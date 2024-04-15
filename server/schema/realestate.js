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

const RealEstateType = new GraphQLObjectType({
  name: "RealEstate",
  fields: () => ({
    property: { type: GraphQLString },
    sale: { type: GraphQLString },
    num: { type: GraphQLInt },
    place: { type: GraphQLString },
    price: { type: GraphQLInt },
    square: { type: GraphQLInt },
    date: { type: GraphQLString },
    img: { type: GraphQLString },
    specialist: { type: UserType }, // Koristimo tip podataka UserType za polje "specialist"
    img1: { type: GraphQLString },
    img2: { type: GraphQLString },
    img3: { type: GraphQLString },
  }),
});

function schemaRealEstate(database) {
  const collection = database.collection("realestate");
  const specialistsCollection = database.collection("staff");

  const RealEstateMutation = new GraphQLObjectType({
    name: "RootMutationType",
    fields: {
      deleteProperty: {
        type: RealEstateType,
        args: { num: { type: GraphQLInt } },
        async resolve(parentValue, { num }) {
          const deletedProperty = await collection.findOneAndDelete({
            num: num,
          });
          return deletedProperty.value;
        },
      },
      addProperty: {
        type: RealEstateType,
        args: {
          property: { type: GraphQLString },
          sale: { type: GraphQLString },
          num: { type: GraphQLInt },
          place: { type: GraphQLString },
          price: { type: GraphQLInt },
          square: { type: GraphQLInt },
          date: { type: GraphQLString },
          img: { type: GraphQLString },
          specialist: { type: GraphQLString },
          img1: { type: GraphQLString },
          img2: { type: GraphQLString },
          img3: { type: GraphQLString },
        },
        async resolve(parentValue, args) {
          try {
            const addedProperty = await collection.insertOne({ ...args });
            if (addedProperty.insertedId) {
              const newProperty = await collection.findOne({
                _id: addedProperty.insertedId,
              });
              return newProperty;
            } else {
              console.log("Failed to retrieve the newly added property.");
              return null;
            }
          } catch (error) {
            console.error("Error inserting property:", error);
            return null;
          }
        },
      },
    },
  });

  const RealEstateQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      item: {
        type: RealEstateType,
        args: { num: { type: GraphQLInt } },
        async resolve(parentValue, args) {
          const realEstateData = await collection.findOne({ num: args.num });

          const specialistData = await specialistsCollection.findOne({
            user: realEstateData.specialist,
          });

          const mergedData = { ...realEstateData, specialist: specialistData };

          return mergedData;
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
      propertyAll: {
        type: new GraphQLList(RealEstateType),
        args: {
          sale: { type: GraphQLString },
        },
        async resolve(parentValue, args) {
          const properties = await collection.find(args).toArray();
          return properties;
        },
      },
      staff: {
        type: new GraphQLList(RealEstateType),
        args: {
          specialist: { type: GraphQLString },
        },
        async resolve(parentValue, args) {
          const staffProperties = await collection.find(args).toArray();
          return staffProperties;
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
          const searchFilter = {};
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
    mutation: RealEstateMutation,
  });
}

module.exports = { schemaRealEstate };
