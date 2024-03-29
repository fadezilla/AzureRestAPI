var express = require('express');
var db = require('../models');
var CityService = require('../services/CityService');
var cityService = new CityService(db);
var router = express.Router();
var bodyParser = require('body-parser');
const { json } = require('sequelize');
var jsonParser = bodyParser.json();

router.get('/', async function(req, res, next) {
    const cities = await cityService.getAll();
    res.render('cities', { cities });
});

router.post('/', jsonParser, async function(req, res, rext) {
    const {name, country} = req.body;
    if(name == null && country == null) {
        res.status(400).send('Not provided any color');
        return;
    }
    await colorService.create(name, country);
    res.end();
});

module.exports = router;