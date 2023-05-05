const sequelize = require("../config/connection")
const { Plant } = require("../models");
const plantData = [
    {
      // Photo by Markus Spiske
      plant_image: '../Images/seeds/Tomatoes.jpg',
      plant_name: 'Tomato',
      difficulty: 3,
      watering: 'Regularly, every 2-3 days',
      sun: 'Full sun',
      indoor_outdoor: 'Outdoor',
      zone: '10a, 10b, 11a, 11b',
    },
    {
      // Photo by Markus Spiske
      plant_image: '../Images/seeds/Basil',
      plant_name: 'Basil',
      difficulty: 2,
      watering: 'Regularly, every 3-4 days',
      sun: 'Partial sun',
      indoor_outdoor: 'Indoor/Outdoor',
      zone: '10a, 10b, 11a, 11b'
    },
    {
      // Photo by Kelly Neil
      plant_image: '../Images/seeds/Cucumber',
      plant_name: 'Cucumber',
      difficulty: 4,
      watering: 'Frequently, every 1-2 days',
      sun: 'Full sun',
      indoor_outdoor: 'Outdoor',
      zone: '10a, 10b, 11a, 11b'
    },
    {
      // Photo by Tim Krisztian
      plant_image: '../Images/seeds/Mint',
      plant_name: 'Mint',
      difficulty: 1,
      watering: 'Regularly, every 3-4 days',
      sun: 'Partial sun',
      indoor_outdoor: 'Indoor/Outdoor',
      zone: '3'
    },
    {
      // Photo by Joyce Toh
      plant_image: '../Images/seeds/Lavender',
      plant_name: 'Lavender',
      difficulty: 2,
      watering: 'Infrequently, every 5-7 days',
      sun: 'Full sun',
      indoor_outdoor: 'Indoor/Outdoor',
      zone: '5-9'
    },
    {
      // Photo by Tania Malréchauffé
      plant_image: '../Images/seeds/Squash',
      plant_name: 'Squash',
      difficulty: 4,
      watering: 'Frequently, every 1-2 days',
      sun: 'Full sun',
      indoor_outdoor: 'Outdoor',
      zone: '5a'
    },
    {
      // Photo by Julian Hochgesang
      plant_image: '../Images/seeds/Rosemary',
      plant_name: 'Rosemary',
      difficulty: 2,
      watering: 'Infrequently, every 5-7 days',
      sun: 'Full sun',
      indoor_outdoor: 'Indoor/Outdoor',
      zone: '8-9'
    }
]
const seedPlants = async () => {
  await sequelize.sync({ force: true });
  await Plant.bulkCreate(plantData);
  console.log('\n----- Plants seeded -----\n');
  process.exit(0);
}
seedPlants();