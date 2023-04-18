const express = require("express")
const  cors = require("cors")
// import express from "express"
const products = require("./products");
// // import {connect} from './connect';

// // const uri = 'mongodb+srv://huynhson181001:Conmeobeo19970@cluster0.8rraen6.mongodb.net/test'
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.json({});
});
app.get("/products", (req, res) => {
  res.send(products);
});
(async function () {
  try {
    // connect(uri)

    app.listen(port, () => {
      console.log(`server is running on port ${port}`);
    });
  } catch (error) {
    console.error(error);
  }
})();
