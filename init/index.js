const mongoose = require("mongoose")
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb+srv://satyamgarg1672001:mxansIYB8DPqorPv@restorant23.bf06ld7.mongodb.net/practice_project"

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
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
    
}

initDB();