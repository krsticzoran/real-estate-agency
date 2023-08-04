import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLInt,
  GraphQLBoolean,
} from "graphql";
import { Collection, Db } from "mongodb";

const BlogType = new GraphQLObjectType({
  name: "Blog",
  fields: {
    title: { type: GraphQLString },
    content: { type: GraphQLString },
  },
});

function schemaBlog(database: Db): GraphQLSchema {
  const collection: Collection = database.collection("blog");

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
    },
  });

  return new GraphQLSchema({
    query: RootQuery,
  });
}

export { schemaBlog };
