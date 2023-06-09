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
      indoor_outdoor: 'Indoor-Outdoor',
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
      indoor_outdoor: 'Indoor-Outdoor',
      zone: '3'
      },
      {
      // Photo by Joyce Toh
      plant_image: 'https://images.unsplash.com/photo-1565011523534-747a8601f10a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      plant_name: 'Lavender',
      difficulty: 2,
      watering: 'Infrequently, every 5-7 days',
      sun: 'Full sun',
      indoor_outdoor: 'Indoor-Outdoor',
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
      indoor_outdoor: 'Indoor-Outdoor',
      zone: '8-9'
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
      indoor_outdoor: 'Indoor-Outdoor',
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
      indoor_outdoor: 'Outdoor-Indoor',
      zone: '10-11'
      },
      {
      plant_image: 'https://images.unsplash.com/photo-1541093113199-a2e9d84e903f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXx6cXd0ejZncFJFQXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60',
      plant_name: 'Chrysanthemum',
      difficulty: 2,
      watering: 'Regularly, once or twice a week',
      sun: 'Full sun or partial shade',
      indoor_outdoor: 'Outdoor-Indoor',
      zone: '5-9'
      },
      {
        plant_image: 'https://images.unsplash.com/photo-1576252137965-bfee510aaa6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        plant_name: 'Poinsettia',
        difficulty: 2,
        watering: 'Sparingly, every 1-2 weeks',
        sun: 'Indirect sunlight',
        indoor_outdoor: 'Indoor',
        zone: '9-11'
        },
      {
      plant_image: 'https://images.unsplash.com/photo-1504716367505-9f22f6a7e242?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      plant_name: 'Dahlia',
      difficulty: 2,
      watering: 'Regularly, about 1-2 inches of water per week, allowing soil to dry out slightly between watering',
      sun: 'Full sun, at least 6 hours of direct sunlight per day',
      indoor_outdoor: 'Outdoor',
      zone: '8-11'
      },
      {
      plant_image: 'https://images.unsplash.com/photo-1650809373203-22461d5d82dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
      plant_name: 'Azalea',
      difficulty: 2,
      watering: 'Regularly, once or twice a week',
      sun: 'Partial shade',
      indoor_outdoor: 'Outdoor-Indoor',
      zone: '6-9'
      },
      {
      plant_image: 'https://images.unsplash.com/photo-1647631703221-e1e7ede1767b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
      plant_name: 'Spider Plant',
      difficulty: 1,
      watering: 'Moderate, every 1-2 weeks',
      sun: 'Indirect sunlight or partial shade',
      indoor_outdoor: 'Outdoor-Indoor',
      zone: '9-11'
      },
      {
      plant_image: 'https://images.unsplash.com/photo-1622673037899-d7914ece9fe8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      plant_name: 'Fiddle Leaf Fig',
      difficulty: 3,
      watering: 'Moderate, every 1-2 weeks',
      sun: 'Bright, indirect sunlight',
      indoor_outdoor: 'Indoor',
      zone: 'N/A (not cold-tolerant)'
      },
      {
      plant_image: 'https://images.unsplash.com/photo-1628620223982-bebbd190807c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80',
      plant_name: 'Peace Lily',
      difficulty: 2,
      watering: 'Moderate to high, keep soil moist',
      sun: 'Indirect or low light',
      indoor_outdoor: 'Indoor-Outdoor',
      zone: '11-12'
      },
      {
      plant_image: 'https://images.unsplash.com/photo-1616961002389-504228edfcb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      plant_name: 'Snake Plant',
      difficulty: 1,
      watering: 'Low, every 2-6 weeks',
      sun: 'Indirect or low light',
      indoor_outdoor: 'Indoor-Outdoor',
      zone: '9-11'
      },
      {
      plant_image: 'https://images.unsplash.com/photo-1509085574999-9f0dd537364b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      plant_name: 'English Ivy',
      difficulty: 2,
      watering: 'Moderate, every 1-2 weeks',
      sun: 'Bright, indirect sunlight',
      indoor_outdoor: 'Indoor-Outdoor',
      zone: '10-12'
      },
      {
      plant_image: 'https://images.unsplash.com/photo-1589999251554-21789097351f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=396&q=80',
      plant_name: 'Chinese Money Plant',
      difficulty: 1,
      watering: 'Moderate, every 1-2 weeks',
      sun: 'Indirect or partial sunlight',
      indoor_outdoor: 'Indoor-Outdoor',
      zone: '10-12'
      },
      {
      plant_image: 'https://images.unsplash.com/photo-1591656884447-8562e2373a66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      plant_name: 'Rubber Plant',
      difficulty: 2,
      watering: 'Moderate, every 1-2 weeks',
      sun: 'Bright, indirect sunlight',
      indoor_outdoor: 'Indoor or outdoor (but prefers shade)',
      zone: '10-12'
      },
      {
      plant_image: 'https://images.unsplash.com/photo-1624622434922-ab4f0662fb74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
      plant_name: 'Philodendron',
      difficulty: 1,
      watering: 'Moderate, every 1-2 weeks',
      sun: 'Indirect or partial sunlight',
      indoor_outdoor: 'Indoor or outdoor (but prefers shade)',
      zone: '10-12'
      },
      {
      plant_image: 'https://images.unsplash.com/photo-1619398221730-09294c6d4139?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      plant_name: 'Boston Fern',
      difficulty: 1,
      watering: 'High, keep soil moist',
      sun: 'Indirect or low light',
      indoor_outdoor: 'Indoor or outdoor (but prefers shade)',
      zone: '9-11'
      },
      {
      plant_image: 'https://images.unsplash.com/photo-1569745358610-b01866003860?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
      plant_name: 'Aloe Vera',
      difficulty: 1,
      watering: 'High, keep soil moist',
      sun: 'Bright, indirect sunligh',
      indoor_outdoor: 'Indoor or outdoor (but prefers shade)',
      zone: '9-11'
      },
      {
      plant_image: 'https://images.unsplash.com/photo-1557768960-c2d136235503?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
      plant_name: 'Geraniums',
      difficulty: 2,
      watering: 'Regularly, every 2-3 days',
      sun: 'Full sun to partial shade',
      indoor_outdoor: 'Outdoor',
      zone: '3-10'
      },

      {
      plant_image: 'https://images.unsplash.com/photo-1661686944196-f0bfc3494011?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
      plant_name: 'Begonias',
      difficulty: 2,
      watering: 'Regularly, every 2-3 days',
      sun: 'Partial to full shade',
      indoor_outdoor: 'Outdoor',
      zone: '10-11'
      },
      {
      plant_image: 'https://images.unsplash.com/photo-1629727773500-8f0f6162930b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      plant_name: 'Petunias',
      difficulty: 2,
      watering: 'Regularly, every 2-3 days',
      sun: 'Full sun',
      indoor_outdoor: 'Outdoor',
      zone: '10-11'
      },
      {
      plant_image: 'https://images.unsplash.com/photo-1592477480509-d798acae1098?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
      plant_name: 'Marigolds',
      difficulty: 2,
      watering: 'Regularly, every 2-3 days',
      sun: 'Full sun',
      indoor_outdoor: 'Outdoor',
      zone: '2-11'
      },
      {
        plant_image: 'https://images.unsplash.com/photo-1659951273428-a6be0d1e8753?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
        plant_name: 'impatiens',
        difficulty: 2,
        watering: 'Regularly, every 2-3 days',
        sun: 'Partial shade to full shade',
        indoor_outdoor: 'Outdoor',
        zone: '10-11'
        },
      {
      plant_image: 'https://images.unsplash.com/photo-1567990989224-6441e1483ac8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80',
      plant_name: 'Hibiscus',
      difficulty: 2,
      watering: 'Regularly, every 2-3 days',
      sun: 'Full sun',
      indoor_outdoor: 'Outdoor',
      zone: '9-11'
      }

                  

]
const seedPlants = async () => {
  await sequelize.sync({ force: true });
  await Plant.bulkCreate(plantData);
  console.log('\n----- Plants seeded -----\n');
  process.exit(0);
}


module.exports = seedPlants;