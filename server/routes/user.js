const express = require('express');

const router = express.Router();

const mongoose = require('mongoose');
const User = require('../models/user');

// Routes
router.post('/', async (req, res) => {
    const data = req.body;
    if (!data?.email) return res.status(404).json({ message: "Email is requierd" });
    if (!data?.password) return res.status(404).json({ message: "Password is requierd" });

    User.findOne({
        email: data.email,
    })
        .populate({
            path: 'employer',
            populate: {
                path: 'insurance',
                model: 'User'
            }
        })
        .then(user => {
            if (!user.validPassword(data.password)) return res.status(404).json({ message: "Wrong Credentials" });
            res.json(user);
        })
        .catch((error) => {
            res.status(404).json({ message: error.message })
        });
});

router.post('/identificationNumber', async (req, res) => {
    const data = req.body;
    if (!data?.identificationNumber) return res.status(404).json({ message: "Identification Number is requierd" });

    User.findOne({
        identificationNumber: data.identificationNumber,
    })
        .populate({
            path: 'employer',
            populate: {
                path: 'insurance',
                model: 'User'
            }
        })
        .then(user => {
            res.json(user);
        })
        .catch((error) => {
            res.status(404).json({ message: error.message })
        });
});

router.post('/create', async (req, res) => {
    const data = req.body;
    if (!data?.name) return res.status(404).json({ message: "Name is requierd" });
    if (!data?.email) return res.status(404).json({ message: "Email is requierd" });
    if (!data?.password) return res.status(404).json({ message: "Password is requierd" });
    if (!data?.identificationNumber) return res.status(404).json({ message: "Identification Number is requierd" });

    const newUser = new User(data);

    try {
        await newUser
            .save()
        res.status(200).json(newUser);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});


router.get('/all', async (req, res) => {
    try {
        const Users = await User
            .find()
            .populate({
                path: 'employer',
                populate: {
                    path: 'insurance',
                    model: 'User'
                }
            })

        res.status(200).json(Users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});


router.get('/:id', async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id: ${id}`);

    try {
        const data = await User
            .findById(id)
            .populate({
                path: 'employer',
                populate: {
                    path: 'insurance',
                    model: 'User'
                }
            })

        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});



module.exports = router;