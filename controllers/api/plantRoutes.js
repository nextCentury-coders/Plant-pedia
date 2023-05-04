const router = require("express").Router();
const { Plant } = require("../../models");

router.get("/", async (req, res) => {
    console.log(req.session.loggedIn)
    res.render("landingPage", { loggedIn: req.session.loggedIn });
});

module.exports = router;