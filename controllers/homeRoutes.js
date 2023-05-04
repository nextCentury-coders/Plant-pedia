const router = require("express").Router();
const { Plant } = require("../models");

router.get("/", async (req, res) => {
    // req.session.loggedIn = false;
    console.log(req.session.loggedIn);
    res.render("landingPage", { loggedIn: req.session.loggedIn });
});

router.get("/login", async (req, res) => {
    console.log(req.session.loggedIn);
    res.render("login", {loggedIn: req.session.loggedIn});
});

// * Create a route for the homepage after the user selects a experience level
router.get("/plants", async (req, res) => {
    try {
        const plants = await Plant.findAll();
        console.log(plants);
        res.render("homepage", { plants, loggedIn: req.session.loggedIn });
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
      }
});

module.exports = router;