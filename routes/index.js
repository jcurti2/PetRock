const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => res.send('this is earths core!!!'))

module.exports = router;