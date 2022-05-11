const express = require('express');

const router = express.Router();

const mongoose = require('mongoose');
const Receipt = require('../models/receipt');


router.post('/create', async (req, res) => {
    const data = req.body;
    if (!data?.patient) return res.status(404).json({ message: "Patient is requierd" });
    if (!data?.doctor) return res.status(404).json({ message: "Doctor is requierd" });
    if (!data?.insurance) return res.status(404).json({ message: "Insurance is requierd" });
    if (!data?.pharmacist) return res.status(404).json({ message: "Pharmacist Number is requierd" });

    const newReceipt = new Receipt(data)

    try {
        await newReceipt
            .save()

        res.status(200).json(newReceipt);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.get('/all', async (req, res) => {
    try {
        const Receipts = await Receipt
            .find()
            .populate({
                path: 'patient',
                model: 'User'
            })
            .populate({
                path: 'patient',
                populate: {
                    path: 'employer',
                    populate: {
                        path: 'insurance',
                        model: 'User'
                    }
                }
            })
            .populate({
                path: 'doctor',
                model: 'User'
            })
            .populate({
                path: 'insurance',
                model: 'User'
            })
            .populate({
                path: 'pharmacist',
                model: 'User'
            })
            .populate({
                path: 'medications',
                populate: {
                    path: 'medication',
                    model: 'Medication',
                }
            })

        res.status(200).json(Receipts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/userId/:id', async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id: ${id}`);

    try {
        const data = await Receipt
            .find()
            .populate({
                path: 'patient',
                model: 'User'
            })
            .populate({
                path: 'patient',
                populate: {
                    path: 'employer',
                    populate: {
                        path: 'insurance',
                        model: 'User'
                    }
                }
            })
            .populate({
                path: 'doctor',
                model: 'User'
            })
            .populate({
                path: 'insurance',
                model: 'User'
            })
            .populate({
                path: 'pharmacist',
                model: 'User'
            })
            .populate({
                path: 'medications',
                populate: {
                    path: 'medication',
                    model: 'Medication',
                }
            })
        const result = data.map((d) => {
            if (d.patient._id == id) {
                return d
            } else if (d.doctor._id == id) {
                return d
            } else if (d.insurance._id == id) {
                return d
            } else if (d.pharmacist._id == id) {
                return d
            }
        }).filter(x => x !== undefined);

        if (result.length === 0) {
            throw new Error("no Receipt for id found")
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id: ${id}`);

    try {
        const data = await Receipt
            .findById(id)
            .populate({
                path: 'patient',
                model: 'User'
            })
            .populate({
                path: 'patient',
                populate: {
                    path: 'employer',
                    populate: {
                        path: 'insurance',
                        model: 'User'
                    }
                }
            })
            .populate({
                path: 'doctor',
                model: 'User'
            })
            .populate({
                path: 'insurance',
                model: 'User'
            })
            .populate({
                path: 'pharmacist',
                model: 'User'
            })
            .populate({
                path: 'medications',
                populate: {
                    path: 'medication',
                    model: 'Medication',
                }
            })

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id: ${id}`);

    if (!data?.patient) return res.status(404).json({ message: "Patient is requierd" });
    if (!data?.doctor) return res.status(404).json({ message: "Doctor is requierd" });
    if (!data?.insurance) return res.status(404).json({ message: "Insurance is requierd" });
    if (!data?.pharmacist) return res.status(404).json({ message: "Pharmacist Number is requierd" });

    try {
        const result = await Receipt
            .findByIdAndUpdate(id, data, { new: true })
            .populate({
                path: 'patient',
                model: 'User'
            })
            .populate({
                path: 'patient',
                populate: {
                    path: 'employer',
                    populate: {
                        path: 'insurance',
                        model: 'User'
                    }
                }
            })
            .populate({
                path: 'doctor',
                model: 'User'
            })
            .populate({
                path: 'insurance',
                model: 'User'
            })
            .populate({
                path: 'pharmacist',
                model: 'User'
            })
            .populate({
                path: 'medications',
                populate: {
                    path: 'medication',
                    model: 'Medication',
                }
            })

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;