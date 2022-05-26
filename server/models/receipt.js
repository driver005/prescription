// Load required packages
const mongoose = require('mongoose');

// Define our user schema
const ReceiptSchema = new mongoose.Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    insurance: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    pharmacist: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    workAccident: {
        type: Boolean,
        default: false,
    },
    date: {
        type: Date,
        default: new Date(),
    },
    workAccidentDate: {
        type: Date,
        default: new Date(),
    },
    fees: {
        type: Boolean,
        default: false,
    },
    noctu: {
        type: String,
        default: '',
    },
    other: {
        type: String,
        default: '',
    },
    subjectToJustification: {
        type: Boolean,
        default: false,
    },
    deliveryCosts: {
        type: String,
        default: '',
    },
    sonderPZN: {
        type: String,
        default: '',
    },
    factor: {
        type: String,
        default: '',
    },
    numberOfPacks: {
        type: Number,
        default: 0,
    },
    additionalPayment: {
        type: Number,
        default: 0,
    },
    activeIngredient: {
        type: Number,
        default: 0,
    },
    additionalCosts: {
        type: Number,
        default: 0,
    },
    emergencyServiceFee: {
        type: Number,
        default: 0,
    },
    tax: {
        type: Number,
        default: 0,
    },
    totalGross: {
        type: Number,
        default: 0,
    },
    medications: [{
        medication: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Medication',
        },
        dosis: {
            type: Number,
            default: 0,
        },
        dosage: {
            type: String,
            default: '',
        },
        aut_Idem: {
            type: String,
            default: '',
        },
    }]
}, {
    timestamps: true,
    collection: 'Receipt',
});


const Receipt = mongoose.model('Receipt', ReceiptSchema);
// Export the Mongoose model

module.exports = Receipt