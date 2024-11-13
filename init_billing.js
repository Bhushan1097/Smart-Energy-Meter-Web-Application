const mongoose = require("mongoose");
let Billing = require("../models/billing.js"); // Assuming your Billing model is stored in this path

main()
  .then(() => {
    console.log("Connection successful");
    return deleteAllBillingData(); // Call to delete all existing billing data
  })
  .then(() => {
    return insertBillingData(); // Insert new billing data after deletion
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/SmartEnergyMeter"); // Replace with your database name
}

// Function to delete all existing billing data
async function deleteAllBillingData() {
  await Billing.deleteMany({}); // Deletes all existing billing documents in the collection
  console.log("All billing data deleted");
}

// Define billing data for 5 users
let billingData = [
  {
    mac_Id: "MAC00123A",
    amount_paid: 150,
    payment_status: "Paid",
    transaction_id: "TXN12345601",
    created_at: new Date('2024-10-18T07:45:21.776Z'),
    updated_at: new Date('2024-10-18T07:45:21.776Z')
  },
  {
    mac_Id: "MAC00123B",
    amount_paid: 200,
    payment_status: "Paid",
    transaction_id: "TXN12345602",
    created_at: new Date('2024-10-18T07:45:21.776Z'),
    updated_at: new Date('2024-10-18T07:45:21.776Z')
  },
  {
    mac_Id: "MAC00123C",
    amount_paid: 250,
    payment_status: "Pending",
    transaction_id: "TXN12345603",
    created_at: new Date('2024-10-18T07:45:21.776Z'),
    updated_at: new Date('2024-10-18T07:45:21.776Z')
  },
  {
    mac_Id: "MAC00123D",
    amount_paid: 180,
    payment_status: "Paid",
    transaction_id: "TXN12345604",
    created_at: new Date('2024-10-18T07:45:21.776Z'),
    updated_at: new Date('2024-10-18T07:45:21.776Z')
  },
  {
    mac_Id: "MAC00123E",
    amount_paid: 160,
    payment_status: "Failed",
    transaction_id: "TXN12345605",
    created_at: new Date('2024-10-18T07:45:21.776Z'),
    updated_at: new Date('2024-10-18T07:45:21.776Z')
  }
];

// Function to insert new billing data
async function insertBillingData() {
  await Billing.insertMany(billingData); // Insert multiple documents in the collection
  console.log("Billing data inserted successfully");
}
