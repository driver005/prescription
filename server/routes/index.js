const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Wocken up').status(200)
})

router.use('/user', require('./user'));
router.use('/medication', require('./medication'));
router.use('/receipt', require('./receipt'));


module.exports = router;