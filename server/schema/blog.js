const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLInt,
} = require("graphql");
const { Collection, Db } = require("mongodb");

const BlogType = new GraphQLObjectType({
  name: "Blog",
  fields: () => ({
    title: { type: GraphQLString },
    property: { type: GraphQLString },
    author: { type: GraphQLString },
    num: { type: GraphQLInt },
    img: { type: GraphQLString },
    content: { type: GraphQLString },
  }),
});

function schemaBlog(database) {
  const collection = database.collection("blog");

  const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      blogList: {
        type: new GraphQLList(BlogType),
        async resolve() {
          const blogList = await collection.find().toArray();
          return blogList;
        },
      },
      blogText: {
        type: BlogType,
        args: { title: { type: GraphQLString } },
        resolve(parentValue, args) {
          return collection.findOne({ title: args.title });
        },
      },
    },
  });

  return new GraphQLSchema({
    query: RootQuery,
  });
}

module.exports = { schemaBlog };