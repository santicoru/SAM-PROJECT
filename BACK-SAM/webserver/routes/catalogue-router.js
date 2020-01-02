'use strict';

const express = require('express');
const router = express.Router();

const showCatalogueController = require('../controllers/catalogue/index');

router.get('/', showCatalogueController);

module.exports = router;
