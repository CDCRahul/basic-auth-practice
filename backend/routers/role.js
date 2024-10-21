const roleController = require('../controllers/roleController');

const router = require('express').Router();

router.post('/add-role', roleController.addRole)

module.exports = router;