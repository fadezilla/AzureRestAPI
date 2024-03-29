var express = require('express');
var db = require('../models');
var ColorService = require('../services/ColorService');
var colorService = new ColorService(db);
var router = express.Router();
var bodyParser = require('body-parser');
const { json } = require('sequelize');
var jsonParser = bodyParser.json();

router.get('/', async function(req, res, next) {
    const colors = await colorService.getAll();
    res.render('colors', { colors });
});

router.post('/', jsonParser, async function(req, res, rext) {
    const {name} = req.body;
    if(name == null) {
        res.status(400).send('Not provided any color');
        return;
    }
    await colorService.create(name);
    res.end();
});

router.delete('/', jsonParser, async function(req, res, next) {
    const {name} = req.body;
    if(name == null) {
        res.status(400).send('Not provided any color name');
        return;
    }
    await colorService.delete(name);
    res.end();
})



module.exports = router;