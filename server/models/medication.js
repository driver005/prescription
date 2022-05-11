// Load required packages
const mongoose = require('mongoose');

// Define our user schema
const MedicationSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    identificationNumber: {
        type: String,
        unique: true,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    activeIngredient: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        enum: [
            'medicine',
            'tools',
            'consultation',
            'vaccine'
        ],
        default: 'medicine',
    },
}, {
    timestamps: true,
    collection: 'Medication',
});


const Medication = mongoose.model('Medication', MedicationSchema);
// Export the Mongoose model

module.exports = Medication