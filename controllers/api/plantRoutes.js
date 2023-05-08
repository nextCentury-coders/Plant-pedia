const router = require("express").Router();
const { Plant, Review, User } = require("../../models");


router.get("/", async (req, res) => {
  try {
    const plantData = await Plant.findAll({
      // include: [{model: Plant}]
    });
    console.log("hello world");
    res.status(200).json(plantData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/reviews', async (req, res) => {
  console.log('POST request to /plants/:id/reviews was received.');
  try {
    const { comment } = req.body;
    const plant_id = req.session.plant_id;

    console.log('Comment:', comment);
    console.log('Plant ID:', req.session.plant_id);

    const reviewData = {
      comment,
      plant_id,
      user_id: req.session.user_id,
    };

    const newReview = await Review.create(reviewData);

    console.log('New Review:', newReview);

    res.redirect(`/plants/${plant_id}`);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// -> POST   /api/plants/
router.post("/", async (req, res) => {
  console.log(req.body);
  // create a new category

  try {
    const plantData = await Plant.create(req.body);
    res.status(200).json(plantData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
