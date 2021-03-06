'use strict';

const express = require('express');
const router = express.Router();

const { showCatalogueController, showProductController } = require('../controllers/catalogue');

router.get('/', showCatalogueController);
router.get('/:productId', showProductController);

module.exports = router;
