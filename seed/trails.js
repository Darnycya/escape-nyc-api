const db = require('../db/connection')
const Trail = require('../models/trail')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const trails =
  [
    {
      "name": "Anthony's Nose",
      "trailUrl": "https://hikethehudsonvalley.com/wp-content/uploads/2015/05/Spring2014_RWAN_955.jpg",
      "difficulty": "Medium",
      "distanceFromNyc": 40,
      "climbingTime": 2.5,
      "rating": 4
    },
    {
      "name": "Breakneck Ridge",
      "trailUrl": "https://www.nynjtc.org/sites/default/files/styles/hike_park_destination_page/public/hotw/BreakneckRidgePanorama_EduardoGil2014.jpg?itok=KOE4oHkO",
      "difficulty": "Hard",
      "distanceFromNyc": 50,
      "climbingTime": 4,
      "rating": 5
    },
    {
      "name": "Sam's Point",
      "trailUrl": "https://scenichudson.org/wp-content/uploads/2019/10/OA_Sams-Point01_Diana-Richards-1400x1050.jpg",
      "difficulty": "Medium",
      "distanceFromNyc": 79,
      "climbingTime": 3,
      "rating": 5
    },
    {
      "name": "Bash Bish Falls",
      "trailUrl": "https://www.scenichudson.org/wp-content/uploads/2019/10/OA_Bash-Bish_Diana-Richards.jpg",
      "difficulty": "Easy",
      "distanceFromNyc": 106,
      "climbingTime": 1,
      "rating": 4
    }
  ]

    await Trail.insertMany(trails)
    console.log("Created trails!")
}
const run = async () => {
    await main()
    db.close()
}

run()