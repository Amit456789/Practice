const express = require("express");
const mongoose = require("mongoose");
const { UserModel } = require("./model/UserSchema");
const { NotesModel } = require("./model/NotesSchema");
const { LocModel } = require("./model/Loc");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    let data = await UserModel.find();
    console.log(data);
    res.send({"data":data});
  } catch (error) {
    console.log("Get Error::: ", error);
  }
});
app.get("/location", async (req, res) => {
  try {
    let data = await LocModel.find();
    console.log(data);
    res.send({"data":data});
  } catch (error) {
    console.log("Get Error::: ", error);
  }
});
app.get("/notes", async (req, res) => {
  try {
    let data = await NotesModel.find();
    console.log(data);
    res.send({"data":data});
  } catch (error) {
    console.log("Get Error::: ", error);
  }
});
app.post("/", async (req, res) => {
          // const myObj = {
          //           name:"AMIT"
          // }
  let data = new UserModel(req.body)
//   console.log(data);
await data.save()
          res.send(`data`);
});
app.post("/notes", async (req, res) => {
          // const myObj = {
          //           name:"AMIT"
          // }
 await NotesModel.insertMany(req.body)
//   console.log(data);
// await data.save()
          res.send(`data`);
});
app.listen(7900, async () => {
  await mongoose.connect(`mongodb://localhost:27017/Pearl`);
  console.log(`http://localhost:6900`);
});
// mongodb://localhost:27017
