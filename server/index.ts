import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import { MongoClient, ServerApiVersion } from "mongodb";
import { schema } from "./schema/schema";
import { schemaRealEstate } from "./schema/realestate";
import { schemaBlog } from "./schema/blog";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());

const uri =
  "mongodb+srv://zorankrstic81:tSvBAwWCiHYVdECy@cluster0.1miblzg.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const database = client.db("realestate");

    const schemaWithDatabase = schema(database);

    const realEstateSchema = schemaRealEstate(database);
    const blogSchema = schemaBlog(database);

    app.use(
      "/graphql",
      graphqlHTTP({
        schema: schemaWithDatabase,
        graphiql: true,
      })
    );

    app.use(
      "/realestate",
      graphqlHTTP({
        schema: realEstateSchema,
        graphiql: true,
      })
    );

    app.use(
      "/blog",
      graphqlHTTP({
        schema: blogSchema,
        graphiql: true,
      })
    );

    app.get("/", (req: Request, res: Response) => {
      res.send("Hello World From the Typescript!");
    });

    const port = 8000;

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
}

connectToMongoDB();
