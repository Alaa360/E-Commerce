const express = require("express");
const data = require("./data");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const seedRouter = require("./routes/seedRoutes");
const productRouter = require("./routes/productRoute");

dotenv.config({path: './.env'});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

app.use('/api/seed', seedRouter)
app.use('/api/products', productRouter)


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
