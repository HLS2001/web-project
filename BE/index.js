require('./db/connect')
const express = require("express");
const products = require("./products");
// const connect = require('./connect');
const tasks = require("./routes/tasks");
// const uri = 'mongodb+srv://huynhson181001:Conmeobeo19970@cluster0.8rraen6.mongodb.net/test'

const port = process.env.PORT || 5000;
const app = express();

// middleware
app.use(express.json());

//routes
app.get("/products", (req, res) => {
  res.json(products);
});

app.use(
  "/api/v1/tasks",
  tasks
);




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
