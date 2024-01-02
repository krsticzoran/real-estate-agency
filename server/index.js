const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const { MongoClient, ServerApiVersion } = require("mongodb");
const { schema } = require("./schema/schema");
const { schemaRealEstate } = require("./schema/realestate");
const { schemaBlog } = require("./schema/blog");
const { schemaAuth } = require("./schema/auth");

dotenv.config();

const app = express();
const multer = require("multer");
const upload = multer({ dest: "public/img/property/" });

app.use(express.json());
app.use(cors());

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

    const collection = database.collection("realestate");

    // Handle file uploads at the '/upload' route using Multer
    app.post("/upload", upload.single("img"), async (req, res) => {
      try {
        if (!req.file) {
          return res.status(400).send("No file uploaded.");
        }

        // Logic to handle file upload and update the database with the file path
        const filePath = `public/img/property/${req.file.filename}`;

        const result = await collection.findOneAndUpdate(
          {},
          { $set: { img: filePath } },
          { returnOriginal: false } // Ensure the updated document is returned
        );

        // Check if the update was successful
        if (result && result.value) {
          // Once the file is uploaded and the database is updated, send a success response
          res.status(200).json({ filePath });
        } else {
          // Handle the scenario where the database update failed
          res.status(500).send("Error updating database with file path.");
        }
      } catch (error) {
        // Handle any errors that occur during file upload or database operations
        console.error("Error handling file upload:", error);
        res.status(500).send("Error handling file upload.");
      }
    });

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
