const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('this is earths core!!!'))

router.post('/rocks', controllers.digUpNewRock)

router.get('/rocks', controllers.getAllRocks)

module.exports = router;