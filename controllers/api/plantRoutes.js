const router = require("express").Router();
const { Plant, Review, User } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const plantData = await Plant.findAll({});
    console.log("hello world");
    res.status(200).json(plantData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/")

router.post("/reviews", async (req, res) => {
  console.log("POST request to /plants/:id/reviews was received.");
  try {
    const { comment } = req.body;
    const plant_id = req.session.plant_id;

    console.log("Comment:", comment);
    console.log("Plant ID:", req.session.plant_id);

    const reviewData = {
      comment,
      plant_id,
      user_id: req.session.user_id,
    };

    const newReview = await Review.create(reviewData);

    console.log("New Review:", newReview);

    // Once review is posted it will load the same page and bring user right back to reviews section
    res.redirect(`/plants/${plant_id}#reviews`);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/newPlant', async (req, res) => {
  try {
    // Extract the plant data from the request body
    const {
      plant_image,
      plant_name,
      difficulty,
      water,
      sun,
      indoor_outdoor,
      zone,
    } = req.body;

    // Create a new plant object using the data from the request body
    const newPlant = await Plant.create({
      plant_image,
      plant_name,
      difficulty,
      watering: water,
      sun,
      indoor_outdoor,
      zone,
    });

    // Return the newly created plant object as a response
    res.redirect("/");
  } catch (error) {
    // Return an error response if there was an error creating the new plant
    res.status(500).json({ message: 'Error creating plant', error: error });
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
