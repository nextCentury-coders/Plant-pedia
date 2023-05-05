const sequelize = require("../config/connection")
const { Plant } = require("../models");
const plantData = [
    {
      // Photo by Markus Spiske
      plant_image: 'https://images.unsplash.com/photo-1598512752271-33f913a5af13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      plant_name: 'Tomato',
      difficulty: 3,
      watering: 'Regularly, every 2-3 days',
      sun: 'Full sun',
      indoor_outdoor: 'Outdoor',
      zone: '10a, 10b, 11a, 11b',
    },
    {
      // Photo by Yakov Leonov
      plant_image: 'https://images.unsplash.com/photo-1629157247277-48f870757026?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      plant_name: 'Basil',
      difficulty: 2,
      watering: 'Regularly, every 3-4 days',
      sun: 'Partial sun',
      indoor_outdoor: 'Indoor/Outdoor',
      zone: '10a, 10b, 11a, 11b'
    },
    {
      // Photo by Mockup Graphics
      plant_image: 'https://images.unsplash.com/photo-1587411768638-ec71f8e33b78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      plant_name: 'Cucumber',
      difficulty: 4,
      watering: 'Frequently, every 1-2 days',
      sun: 'Full sun',
      indoor_outdoor: 'Outdoor',
      zone: '10a, 10b, 11a, 11b'
    },
    {
      // Photo by Tim Krisztian
      plant_image: 'https://images.unsplash.com/photo-1603653856395-084002e5d39d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
      plant_name: 'Mint',
      difficulty: 1,
      watering: 'Regularly, every 3-4 days',
      sun: 'Partial sun',
      indoor_outdoor: 'Indoor/Outdoor',
      zone: '3'
    },
    {
      // Photo by Joyce Toh
      plant_image: 'https://images.unsplash.com/photo-1565011523534-747a8601f10a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      plant_name: 'Lavender',
      difficulty: 2,
      watering: 'Infrequently, every 5-7 days',
      sun: 'Full sun',
      indoor_outdoor: 'Indoor/Outdoor',
      zone: '5-9'
    },
    {
      // Photo by Mockup Graphics
      plant_image: 'https://images.unsplash.com/photo-1615485499978-1279c3d6302f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      plant_name: 'Squash',
      difficulty: 4,
      watering: 'Frequently, every 1-2 days',
      sun: 'Full sun',
      indoor_outdoor: 'Outdoor',
      zone: '5a'
    },
    {
      // Photo by Julian Hochgesang
      plant_image: 'https://images.unsplash.com/photo-1594313016519-640ed47407ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
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