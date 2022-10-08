const express = require("express");
const clientsController = require("../controller/client.controller");
const router = express.Router();

router.put('/:email', (clientsController.user))
router.post('/', (clientsController.addClient))


module.exports = router;