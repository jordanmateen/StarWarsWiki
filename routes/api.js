const express = require('express');
const controller = require('../controllers/controller.js')
const router = express.Router()


router.get('/characters', controller.people)

router.get('/characters/:id', controller.people_id)

router.get('/planets', controller.planets)

router.get('/planets/:id', controller.planets_id)

router.get('/vehicles', controller.vehicles)

router.get('/vehicles/:id', controller.vehicles_id)



module.exports = router