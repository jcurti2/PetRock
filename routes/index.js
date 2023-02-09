const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('this is earths core!!!'))

router.post('/rocks', controllers.digUpNewRock)

router.get('/rocks', controllers.getAllRocks)

router.get('/rocks/:id', controllers.getRockById)

router.put('/rocks/:id', controllers.updateRock)

router.delete('/rocks/:id', controllers.deleteRock)

module.exports = router;