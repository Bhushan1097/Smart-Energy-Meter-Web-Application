const mongoose = require("mongoose");

const consumptionSchema = new mongoose.Schema({
    mac_Id: {
        type: String,
        ref: 'User', // Reference to the User model based on mac_Id
        required: true,
    },
    consumption: {
        daily: {
            type: Number,
            default: 1, // Daily consumption in kWh
        },
        weekly: {
            type: Number,
            default: 1, // Weekly consumption in kWh
        },
        monthly: {
            type: Number,
            default: 1, // Monthly consumption in kWh
        }
    },
    recordedAt: {
        type: Date,
        default: Date.now, // Record date (defaults to current date)
    }
}, { timestamps: true }); // Adds 'createdAt' and 'updatedAt' fields automatically

const Consumption = mongoose.model("Consumption", consumptionSchema);

module.exports = Consumption;
