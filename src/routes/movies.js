var express = require('express');
const router = express.Router();
const moviesControllers = require('../controllers/moviesControllers');

router.get('/', moviesControllers.list)
router.post('/create', moviesControllers.create)
router.post('/update/:id', moviesControllers.update)
router.delete('/delete/:id', moviesControllers.delete)
router.get('/:id', moviesControllers.detail)


module.exports = router;

