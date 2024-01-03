const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const { MongoClient, ServerApiVersion } = require("mongodb");
const { schema } = require("./schema/schema");
const { schemaRealEstate } = require("./schema/realestate");
const { schemaBlog } = require("./schema/blog");
const { schemaAuth } = require("./schema/auth");
const multer = require("multer");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "../public/img/property");
  },
  filename: function (req, file, cb) {
    return cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.post("/upload", upload.single("file"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
});

const uri =
  "mongodb+srv://zoki2000:test1234@cluster0.1miblzg.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Define a middleware function for error handling
function errorHandler(err, req, res, next) {
  console.error("Error:", err.message);
  res.status(500).json({ error: "Internal Server Error" });
}

app.use(errorHandler); // Use the error handling middleware

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const database = client.db("realestate");

    const schemaWithDatabase = schema(database);

    const realEstateSchema = schemaRealEstate(database);
    const blogSchema = schemaBlog(database);

    const authSchema = schemaAuth(database);

    app.use(
      "/graphql",
      graphqlHTTP({
        schema: schemaWithDatabase,
        graphiql: true,
      })
    );

    app.use(
      "/auth",
      graphqlHTTP({
        schema: authSchema,
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
      "/bloggraphql",
      graphqlHTTP({
        schema: blogSchema,
        graphiql: true,
      })
    );

    app.get("/", (req, res) => {
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
