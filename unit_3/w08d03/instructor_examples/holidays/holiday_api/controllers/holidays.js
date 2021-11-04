const express = require('express');
const router = express.Router();
const Holiday = require('../models/holidays.js');
const jwt = require('jsonwebtoken');

//AUTH MIDDLEWARE
const auth = async (req, res, next) => {
    //example header => "Authorization":"bearer kdf909sdfsd98f987d"
    const { authorization } = req.headers; //decon auth header
    //check if header is present
    if (authorization) {
        try {
            const token = authorization.split(' ')[1]; //parses token from header
            const payload = jwt.verify(token, 'secret');
            req.user = payload; //puts user data into request object
            next(); //go to the route
        } catch (error) {
            res.status(400).json(error);
        }
    } else {
        res.status(400).send('NO AUTHORIZATION HEADER');
    }
};
//////////////////////////

router.post('/', auth, async (req, res) => {
    try {
        console.log(req.body);
        const createdHoliday = await Holiday.create(req.body);
        res.status(200).json(createdHoliday);
    } catch (error) {
        res.status(400).json(error);
    }
});

router.get('/', auth, async (req, res) => {
    try {
        const holidays = await Holiday.find({});
        res.status(200).json(holidays);
    } catch (error) {
        res.status(400).json(error);
    }
});

router.delete('/:id', auth, async (req, res) => {
    try {
        const deletedHoliday = await Holiday.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedHoliday);
    } catch (error) {
        res.status(400).json(error);
    }
});

router.put('/:id', auth, async (req, res) => {
    try {
        const updatedHoliday = await Holiday.findByIdAndUpdate(
            req.params.id,
            req.body
        );
        res.status(200).json(updatedHoliday);
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = router;
