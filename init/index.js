const mongoose = require("mongoose")
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/practice_project"

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);  
  });

async function main() {
    await mongoose.connect(MONGO_URL)
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({ ...obj, owner: "68b73d8fb47fcdd9a2f24506" }));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
    
}

initDB();