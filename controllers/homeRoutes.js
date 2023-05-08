const router = require("express").Router();
const { Plant } = require("../models");

router.get("/", async (req, res) => {
  try {

    const plants = await Plant.findAll();
    const plantList = await Promise.all(
      plants.map(async (plant) => {
        const plantData = {
          id: plant.id,
          image: plant.plant_image,
          name: plant.plant_name,
          difficulty: plant.difficulty,
          water: plant.watering,
          sun: plant.sun,
          indoor_outdoor: plant.indoor_outdoor,
          zone: plant.zone,
          // retrieve other data for this plant here
        };
        return plantData;
      })
    );

    res.render("landingPage", { plantList, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/login", async (req, res) => {
  res.render("login", { loggedIn: req.session.loggedIn });
});

router.get("/plants/:id", async (req, res) => {
  try {
    const plant = await Plant.findByPk(req.params.id);
    const plantData = {
      id: plant.id,
      image: plant.plant_image,
      name: plant.plant_name,
      difficulty: plant.difficulty,
      water: plant.watering,
      sun: plant.sun,
      indoor_outdoor: plant.indoor_outdoor,
      zone: plant.zone,
      // retrieve other data for this plant here
    };
    res.render("plantInfo", { plantData, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/plants/:id", async (req, res) => {
  try {
    const plant = await Plant.findByPk(req.params.id);
    if (!plant) {
      return res.status(404).json({ message: "Plant not found" });
    }
    const { difficulty, water, sun, indoor_outdoor, zone } = req.body;
    // update the plant with the new data
    plant.difficulty = difficulty;
    plant.watering = water;
    plant.sun = sun;
    plant.indoor_outdoor = indoor_outdoor;
    plant.zone = zone;
    await plant.save();
    res.redirect(`/plants/${plant.id}`);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/new", async (req, res) => {
    res.render("addNew", { loggedIn: req.session.loggedIn });
})

router.get("/indoor", (req, res) => {
  Plant.findAll({
    where: {
      indoor_outdoor: "Indoor"
    }
  })
  .then(results => {
    // serialize the results
    const plantResults = results.map(item => item.get({plain: true}))

    console.log(plantResults)

    res.render("indoorPlants", {
      plantList: plantResults
    })
  })



})  

router.get("/outdoor", (req, res) => {
  Plant.findAll({
    where: {
      indoor_outdoor: "Outdoor"
    }
  })
  .then(results => {
    // serialize the results
    const plantResults = results.map(item => item.get({plain: true}))

    console.log(plantResults)

    res.render("outdoorPlants", {
      plantList: plantResults
    })
  })



}) 

router.get("/allPlants", (req, res) => {
  Plant.findAll({

  })
  .then(results => {
    // serialize the results
    const plantResults = results.map(item => item.get({plain: true}))

    console.log(plantResults)

    res.render("allPlants", {
      plantList: plantResults
    })
  })



}) 





module.exports = router;
