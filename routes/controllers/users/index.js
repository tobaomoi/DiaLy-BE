const express = require("express");
const UserControllers = require ("./users");

const router = express.Router();

router.post("/signup", UserControllers.handleUserSignUp);
router.post("/login", UserControllers.handleUserSignUp);

module.exports = router;