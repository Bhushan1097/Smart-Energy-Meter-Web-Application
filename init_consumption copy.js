const mongoose = require("mongoose");
let Consumption = require("../models/consumption.js");

main()
  .then(() => {
    console.log("Connection successful");
    return deleteAllConsumption(); // Call to delete all existing consumption data
  })
  .then(() => {
    return insertConsumptionData(); // Insert new consumption data after deletion
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/SmartEnergyMeter"); // Replace with your database name
}

// Function to delete all existing consumption data
async function deleteAllConsumption() {
  await Consumption.deleteMany({});
  console.log("All consumption data deleted");
}

// Define consumption data for 5 users
let consumptionData = [
  {
    mac_Id: "MAC00123A",
    consumption: {
      daily: 22, // Daily consumption in kWh
      weekly: 154, // Weekly consumption in kWh
      monthly: 620, // Monthly consumption in kWh
    },
    recordedAt: new Date(),
  },
  {
    mac_Id: "MAC00123B",
    consumption: {
      daily: 18, // Daily consumption in kWh
      weekly: 126, // Weekly consumption in kWh
      monthly: 530, // Monthly consumption in kWh
    },
    recordedAt: new Date(),
  },
  {
    mac_Id: "MAC00123C",
    consumption: {
      daily: 30, // Daily consumption in kWh
      weekly: 210, // Weekly consumption in kWh
      monthly: 880, // Monthly consumption in kWh
    },
    recordedAt: new Date(),
  },
  {
    mac_Id: "MAC00123D",
    consumption: {
      daily: 25, // Daily consumption in kWh
      weekly: 175, // Weekly consumption in kWh
      monthly: 750, // Monthly consumption in kWh
    },
    recordedAt: new Date(),
  },
  {
    mac_Id: "MAC00123E",
    consumption: {
      daily: 20, // Daily consumption in kWh
      weekly: 140, // Weekly consumption in kWh
      monthly: 600, // Monthly consumption in kWh
    },
    recordedAt: new Date(),
  },
];


// Function to insert new consumption data
async function insertConsumptionData() {
  await Consumption.insertMany(consumptionData);
  console.log("Consumption data inserted successfully");
}
