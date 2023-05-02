const router = require('express').Router();
const plantRoutes = require("./plantRoutes");
const userRoutes = require("./userRoutes");

router.use("/plants", plantRoutes);
router.use("/user", userRoutes);

module.exports = router;