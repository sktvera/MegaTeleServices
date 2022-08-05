const buildings = require('../models/buildings');
const express = require('express')
const router = express.Router()

const buildingsController = require('../controllers/buildingsController.js')

router.get('/api/buildings',buildingsController.buildings)

router.get('/api/buildings/:buildings_id',buildingsController.buildingsID)



module.exports = router
