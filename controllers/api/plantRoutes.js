const router = require("express").Router();
const { Plant } = require("../../models");


router.get('/', async (req, res) => {
    try {
      const plantData = await Plant.findAll({
        
      });
      console.log('hello world')
      res.status(200).json(plantData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

  
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