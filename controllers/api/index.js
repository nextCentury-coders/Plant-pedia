const router = require('express').Router();
// const plantRoutes = require("./plantRoutes");
const userRoutes = require("./userRoutes");

// router.use("/plants", plantRoutes);
router.use("/users", userRoutes);

module.exports = router;