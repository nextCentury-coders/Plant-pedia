const router = require("express").Router();

router.get("/", async (req, res) => {
    res.render("landingPage");
});

router.get("/login", async (req, res) => {
    res.render("login");
})

router.get("/plants", async (req, res) => {
    res.render("homepage");
})

module.exports = router;