// Load required packages
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define our user schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    identificationNumber: {
        type: String,
        unique: true,
        required: true,
    },
    businessPlace: {
        type: String,
    },
    jobTitle: {
        type: String,
    },
    insuranceIsOfState: {
        type: Boolean,
        default: false,
    },
    birthday: {
        type: String,
    },
    phone: {
        type: String,
    },
    status: {
        type: String,
    },
    address: {
        city: {
            type: String,
        },
        street: {
            type: String,
        },
        zip: {
            type: String,
        },
        country: {
            type: String,
        },
    },
    employer: {
        insurance: {
            type: mongoose.Schema.Types.ObjectId,
            unique: true,
            ref: 'User',
        },
        name: {
            type: String,
        },
        number: {
            type: String,
        },
    },
    type: {
        type: String,
        enum: [
            'doctor',
            'patient',
            'pharmacist',
            'insurance'
        ],
        default: 'patient',
    },
}, {
    timestamps: true,
    collection: 'User',
});

// Execute before each user.save() call
UserSchema.pre('save', async function (callback) {
    const user = this;

    // Break out if the password hasn't changed
    if (!user.isModified('password')) return callback();

    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(8), null);
    return callback()
});

UserSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model('User', UserSchema);
// Export the Mongoose model

module.exports = User