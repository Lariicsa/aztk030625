const { Router } = require("express");
const router = new Router();

const mainController = require("../controllers/index");

router.get("/", mainController.getHome);

router.post("/", mainController.encriptText);

module.exports = router;
