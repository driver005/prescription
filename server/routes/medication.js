const express = require('express');

const router = express.Router();

const mongoose = require('mongoose');
const Medication = require('../models/medication');

// Routes
router.post('/', async (req, res) => {
    const data = req.body;
    if (!data?.name) return res.status(404).json({ message: "Name is requierd" });

    Medication.findOne({
        name: data.name,
    })
        .then(user => {
            res.json(user);
        })
        .catch((error) => {
            res.status(404).json({ message: error.message })
        });
});

router.post('/identificationNumber', async (req, res) => {
    const data = req.body;
    if (!data?.identificationNumber) return res.status(404).json({ message: "Identification Number is requierd" });

    Medication.findOne({
        identificationNumber: data.identificationNumber,
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
    if (!data?.price) return res.status(404).json({ message: "Price is requierd" });
    if (!data?.activeIngredient) return res.status(404).json({ message: "Active ingredient is requierd" });
    if (!data?.identificationNumber) return res.status(404).json({ message: "Identification Number is requierd" });

    const newMedication = new Medication(data);

    try {
        await newMedication.save();

        res.status(200).json(newMedication);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});


router.get('/all', async (req, res) => {
    try {
        const Medications = await Medication.find();

        res.status(200).json(Medications);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});


router.get('/:id', async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id: ${id}`);

    try {
        const data = await Medication.findById(id);

        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});



module.exports = router;