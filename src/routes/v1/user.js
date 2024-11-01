const express = require("express");
const { authCheck } = require("../../middlewares/auth");
const router = express();
const { userController } = require("../../controllers");

router.get("/user/connections", authCheck, userController.getAllConnection);
router.get("/user/requests", authCheck, userController.getAllRequests);

module.exports = router;
