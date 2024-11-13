const mongoose = require("mongoose");

const billingSchema = new mongoose.Schema({
    mac_Id: {
        type: String,
        ref: 'User',
        required: true,
    },
    amount_paid: {
        type: Number,
        required: true,
    },
    payment_status: {
        type: String,
        enum: ['Paid', 'Pending', 'Failed'], // Optional, ensures only specific values are allowed
        required: true,
    },
    transaction_id: {
        type: String,
        required: true,
        unique: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    }
});

// Middleware to update the `updated_at` field automatically
billingSchema.pre('save', function (next) {
    this.updated_at = Date.now();
    next();
});

const Billing = mongoose.model("Billing", billingSchema);

module.exports = Billing;
