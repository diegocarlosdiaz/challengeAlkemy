var express = require('express');
const router = express.Router();
const personajesControllers = require('../controllers/personajesControllers');

router.get('/', personajesControllers.list)
router.post('/create', personajesControllers.create)
router.post('/update/:id', personajesControllers.update)
router.delete('/delete/:id', personajesControllers.destroy)
router.get('/:id', personajesControllers.detail)
router.get('/search', personajesControllers.search)


module.exports = router;