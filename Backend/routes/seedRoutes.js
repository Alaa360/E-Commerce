const express = require("express");
const Product = require("../models/productModel");
const data = require("../data");

const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
  await Product.deleteOne({});
  const createProducts = await Product.insertMany(data.products);
  await User.deleteOne({});
  const createUsers = await User.insertMany(data.users);
  res.send({ createProducts, createUsers });
});

module.exports = seedRouter;
