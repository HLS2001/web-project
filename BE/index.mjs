// Import environment variables
import * as dotenv from 'dotenv'
dotenv.config();

const port = process.env.PORT || 5000;
const connectionString = process.env.URI || "mongodb://127.0.0.1/shop";
const sessionSecret = process.env.SESSION_SECRET || "12345";

// Import application libraries
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import session from 'express-session';
import accountRoute from './routes/account.mjs';

const app = express();

app.use(cors());
app.use(express.json());
app.use(session({
  secret: sessionSecret,
  resave: true,
  saveUninitialized: false
}));
app.use(express.urlencoded({ extended: true }));

// Load routes
app.get("/", (req, res) => {
  res.json({});
});

app.use("/api/account", accountRoute);

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
