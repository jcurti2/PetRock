const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('this is earths core!!!'))

router.post('/rocks', controllers.digUpNewRock)

router.get('/rocks', controllers.getAllRocks)

router.get('/rocks/:id', controllers.getRockById)

router.put('/rocks/:id', controllers.updateRock)

router.delete('/rocks/:id', controllers.deleteRock)

router.post('/owner', controllers.newOwner)

router.get('/owner', controllers.getAllOwners)

router.get('/owner/:id', controllers.getOwnerById)

router.put('/owner/:id', controllers.updateOwner)

router.delete('/owner/:id', controllers.deleteOwner)

module.exports = router;