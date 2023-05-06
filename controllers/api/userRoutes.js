const router = require('express').Router();
const user = require('../../models/user');

router.post('/', async (req, res) => {
  try {
    const userData = await user.create(req.body);
    res.json(userData)

  } catch (err) {
    res.status(400).json(err);
  }
});

// Set up post route for signup
router.post("/signup", async (req, res) => {
  console.log("email",req.body.email);
  console.log("name", req.body.username);
  try {
    const { email, name, password } = req.body;
    const newUser = await user.create({ email, name, password});
    req.session.loggedIn = true;
    console.log("h",req.session.loggedIn);
    res.render("login", { loggedIn: req.body.loggedIn });
    // res.status(200).json(newUser);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Set up post route for login
router.post('/login', async (req, res) => {
  try {
    const userData = await user.findOne({ where: { email: req.body.email } });
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.loggedIn = true;
      res.render("landingPage", { loggedIn: req.body.loggedIn });
    });

  } catch (err) {
      console.log("error");
    res.status(400).json(err);
  }
});

// Set up post route for logout
router.post("/logout", (req, res) => {
  console.log("hey");
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.redirect("/login");
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
