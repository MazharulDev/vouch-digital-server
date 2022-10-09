const express = require("express");
const clientsController = require("../controller/client.controller");
const { verifyJWT } = require("../utils/verifyJWT");
const router = express.Router();

router.put('/:email', (clientsController.user))
router.post('/', verifyJWT, (clientsController.addClient))
router.get("/", verifyJWT, (clientsController.getClient))


module.exports = router;