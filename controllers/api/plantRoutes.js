const router = require("express").Router();
const { Plant } = require("../../models");


router.get('/', async (req, res) => {
    try {
      const plantData = await Plant.findAll({
        // include: [{model: Plant}]
      });
      console.log('hello world')
      res.status(200).json(plantData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

// router.get("/", async (req, res) => {
//     try {
//       const plants = await Plant.findAll();
//       console.log(plants);
//       const plantList = await Promise.all(
//         plants.map(async (plant) => {
//           const plantData = {
//             id: plant.id,
//             image: plant.plant_image,
//             name: plant.plant_name,
//             difficulty: plant.difficulty,
//             water: plant.watering,
//             sun: plant.sun,
//             indoor_outdoor: plant.indoor_outdoor,
//             zone: plant.zone,
//             // retrieve other data for this plant here
//           };
//           return plantData;
//         })
//       );
  
//       // Further code here for handling the plantList data or sending it as a response
  
//     } catch (error) {
//       console.error(error);
//       // Handle the error appropriately
//     }
//   });
  
// -> POST   /api/plants/
router.post('/',  async (req, res) => {
  console.log(req.body)
    // create a new category
    
      try {
        const plantData = await Plant.create(req.body);
        res.status(200).json(plantData);
      } catch (err) {
        res.status(400).json(err);
      }
    });

module.exports = router;