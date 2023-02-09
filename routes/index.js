const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('this is earths core!!!'))

router.post('/rocks', controllers.digUpNewRock)

router.get('/rocks', controllers.getAllRocks)

router.get('/rocks/:id', controllers.getRockById)

router.put('/rocks/:id', controllers.updateRock)

router.delete('/rocks/:id', controllers.deleteRock)

// router.post('/user', controllers.newUser)

// router.get('/user', controllers.getAllUsers)

// router.get('/user/:id', controllers.getUserById)

// router.put('/user/:id', controllers.updateUser)

// router.delete('/user/:id', controllers.deleteUser)

module.exports = router;