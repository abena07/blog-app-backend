const router = require('express').Router()

const { signup } = require('../controllers/auth')

/**
 * authCtrl = {
 *  signup: async (request, respone) => {...}
 * }
 */
router.post("/signup", signup)


module.exports = router