const mongoose = require("mongoose");
const User = require("../models/user.js"); // Assuming your user schema is in 'models/user.js'

main()
    .then(() => {
        console.log("Connection successful");
        return deleteAllUsers(); // Call to delete all existing users
    })
    .then(() => {
        return insertUsers(); // Insert new users after deletion
    })
    .then(() => {
        console.log("Users inserted successfully");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/SmartEnergyMeter"); // Replace with your database name
}

// Function to delete all users
async function deleteAllUsers() {
    await User.deleteMany({});
    console.log("All users deleted");
}

// Function to insert new users
async function insertUsers() {
    let allUsers = [
        {
            mac_Id: "MAC00123A",
            name: "Rohan Sharma",
            username: "rohan123",
            password: "password123",
            mobile_no: "9876543210",
            email: "rohan@example.com",
            current_address: "123 MG Road, Pune",
            current_pincode: "411001",
            permanent_address: "45 Gandhi Street, Mumbai",
            permanent_pincode: "400001",
            created_at: new Date(),
        },
        {
            mac_Id: "MAC00123B",
            name: "Vaishnavi Patil",
            username: "vaishnavi98",
            password: "securePass",
            mobile_no: "8765432109",
            email: "vaishnavi@example.com",
            current_address: "67 Koregaon Park, Pune",
            current_pincode: "411036",
            permanent_address: "89 Andheri West, Mumbai",
            permanent_pincode: "400053",
            created_at: new Date(),
        },
        {
            mac_Id: "MAC00123C",
            name: "Bhushan Desai",
            username: "bhushanD",
            password: "pass9876",
            mobile_no: "7654321098",
            email: "bhushan@example.com",
            current_address: "45 Viman Nagar, Pune",
            current_pincode: "411014",
            permanent_address: "22 Marine Drive, Mumbai",
            permanent_pincode: "400002",
            created_at: new Date(),
        },
        {
            mac_Id: "MAC00123D",
            name: "Aniket Kulkarni",
            username: "aniket_89",
            password: "kulkarniPass",
            mobile_no: "6543210987",
            email: "aniket@example.com",
            current_address: "21 Shivaji Nagar, Pune",
            current_pincode: "411005",
            permanent_address: "78 Juhu, Mumbai",
            permanent_pincode: "400049",
            created_at: new Date(),
        },
        {
            mac_Id: "MAC00123E",
            name: "Sarita Joshi",
            username: "saritaJ",
            password: "joshiPassword",
            mobile_no: "5432109876",
            email: "sarita@example.com",
            current_address: "11 Baner Road, Pune",
            current_pincode: "411045",
            permanent_address: "65 Colaba, Mumbai",
            permanent_pincode: "400005",
            created_at: new Date(),
        },
    ];
   
    await User.insertMany(allUsers);
}
