const router = require("express").Router();
const { Plant } = require("../models");

router.get("/", async (req, res) => {
    console.log(req.session.loggedIn)
    res.render("landingPage");
});

router.get("/login", async (req, res) => {
    console.log(req.session.loggedIn);
    res.render("login");
})

// * Create a route for the homepage after the user selects a experience level
router.get("/plants", async (req, res) => {
    try {
        const plants = await Plant.findAll();
        res.render("homepage", { plants });
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
      }
})

module.exports = router;