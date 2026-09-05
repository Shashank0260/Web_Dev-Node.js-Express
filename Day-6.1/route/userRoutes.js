const express = require("express");
const router = express.Router();

const userController = require("../controller/userController");

router.get("/user", userController.getAllusers);
router.get("/user/:id", userController.getuserById);
router.post("/user", userController.adduser);
router.delete("/user/:id", userController.deleteuserById);
module.exports = router;