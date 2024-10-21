const authController = require('../controllers/authController');
const validateRequestBody = require('../middlewares/validateRequestBody');
const validateRequestHeaders = require('../middlewares/validateRequestHeaders');

const router = require('express').Router();


router.post('/login', authController.loginUser);
router.post('/signup', authController.signUpUser);

module.exports = router;