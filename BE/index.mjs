// Import environment variables
import * as dotenv from 'dotenv'
dotenv.config();

const port = process.env.PORT || 5000;
const connectionString = process.env.URI || "mongodb://127.0.0.1/shop";

// Import application libraries
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

app.use(cors());
app.use(express.json());

// Load routes
app.get("/", (req, res) => {
  res.json({});
});

(async function () {
  try {
    mongoose.connect(connectionString)

    app.listen(port, () => {
      console.log(`server is running on port ${port}`);
    });
  } catch (error) {
    console.error(error);
  }
})();
