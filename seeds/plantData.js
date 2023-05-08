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
    },
    {
    plant_image: 'https://images.unsplash.com/photo-1503149779833-1de50ebe5f8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
    plant_name: 'Machinam Manihot',
    difficulty: 2,
    watering: 'Regularly, every 2-3 days',
    sun: 'Partial shade to full sun',
    indoor_outdoor: 'Indoor/Outdoor',
    zone: '9-11'
    },
    {
      plant_image: 'https://images.unsplash.com/photo-1616844868137-7ffaf43c2d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80',
      plant_name: 'Rose',
      difficulty: 2,
      watering: 'Regularly, once a week',
      sun: 'Full sun',
      indoor_outdoor: 'Outdoor',
      zone: '4-9'
    },
    {
      plant_image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
      plant_name: 'Sunflower',
      difficulty: 1,
      watering: 'Regularly, once or twice a week',
      sun: 'Full sun',
      indoor_outdoor: 'Outdoor',
      zone: '2-11'
      },
      {
        plant_image: 'https://images.unsplash.com/photo-1557929036-44a5d490d527?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
        plant_name: 'Tulip',
        difficulty: 2,
        watering: 'Regularly, once or twice a week',
        sun: 'Full sun or partial shade',
        indoor_outdoor: 'Outdoor',
        zone: '3-8'
      },
      {
        plant_image: 'https://images.unsplash.com/photo-1576014131341-fe1486fb2475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=383&q=80',
        plant_name: 'Orchid',
        difficulty: 3,
        watering: 'Sparingly, every 1-2 weeks',
        sun: 'Indirect sunlight',
        indoor_outdoor: 'Indoor',
        zone: 'N/A (tropical plant)'
        },
        {
          plant_image: 'https://images.unsplash.com/photo-1594417447205-5e1a4e8f05de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
          plant_name: 'Daisy',
          difficulty: 1,
          watering: 'Regularly, once or twice a week',
          sun: 'Full sun or partial shade',
          indoor_outdoor: 'Outdoor',
          zone: '4-9'
          },
        {
          plant_image: 'https://images.unsplash.com/photo-1629984957815-d5476f9a9146?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          plant_name: 'Begonia',
          difficulty: 2,
          watering: 'Regularly, once or twice a week',
          sun: 'partial shade',
          indoor_outdoor: 'Indoor/Outdoor',
          zone: '9-11'
          },
          {
          plant_image: 'https://images.unsplash.com/photo-1590377663350-cfc38d4b6e43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80',
          plant_name: 'Iris',
          difficulty: 2,
          watering: 'Regularly, once or twice a week',
          sun: 'Full sun or partial shade',
          indoor_outdoor: 'Outdoor',
          zone: '2-11'
          },
          {
          plant_image: 'https://images.unsplash.com/photo-1616075196566-f2fc53eb6f75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80',
          plant_name: 'Geranium',
          difficulty: 2,
          watering: 'Regularly, once or twice a week',
          sun: 'Full sun or partial shade',
          indoor_outdoor: 'Outdoor/Indoor',
          zone: '10-11'
          },
            {
            plant_image: 'https://images.unsplash.com/photo-1541093113199-a2e9d84e903f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXx6cXd0ejZncFJFQXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60',
            plant_name: 'Chrysanthemum',
            difficulty: 2,
            watering: 'Regularly, once or twice a week',
            sun: 'Full sun or partial shade',
            indoor_outdoor: 'Outdoor/Indoor',
            zone: '5-9'
            },
            {
              plant_image: 'https://images.unsplash.com/photo-1637538286398-10173661522b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
              plant_name: 'Poinsettia',
              difficulty: 2,
              watering: 'Sparingly, every 1-2 weeks',
              sun: 'Indirect sunlight',
              indoor_outdoor: 'Indoor',
              zone: '9-11'
              },
              {
                plant_image: 'https://images.unsplash.com/photo-1650809373203-22461d5d82dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
                plant_name: 'Azalea',
                difficulty: 2,
                watering: 'Regularly, once or twice a week',
                sun: 'Partial shade',
                indoor_outdoor: 'Outdoor/Indoor',
                zone: '6-9'
                },
  

]
const seedPlants = async () => {
  await sequelize.sync({ force: true });
  await Plant.bulkCreate(plantData);
  console.log('\n----- Plants seeded -----\n');
  process.exit(0);
}


module.exports = seedPlants;