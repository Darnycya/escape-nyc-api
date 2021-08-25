
const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')
const PORT = process.env.PORT || 8080

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
})

const trails =
  [
    {
      "id": "1",
      "name": "Anthony's Nose",
      "trailUrl": "https://hikethehudsonvalley.com/wp-content/uploads/2015/05/Spring2014_RWAN_955.jpg",
      "difficulty": "Medium",
      "distanceFromNyc": 40,
      "climbingTime": 2.5,
      "rating": 4
    },
    {
      "id": "2",
      "name": "Breakneck Ridge",
      "trailUrl": "https://www.nynjtc.org/sites/default/files/styles/hike_park_destination_page/public/hotw/BreakneckRidgePanorama_EduardoGil2014.jpg?itok=KOE4oHkO",
      "difficulty": "Hard",
      "distanceFromNyc": 50,
      "climbingTime": 4,
      "rating": 5
    },
    {
      "id": "3",
      "name": "Sam's Point",
      "trailUrl": "https://scenichudson.org/wp-content/uploads/2019/10/OA_Sams-Point01_Diana-Richards-1400x1050.jpg",
      "difficulty": "Medium",
      "distanceFromNyc": 79,
      "climbingTime": 3,
      "rating": 5
    },
    {
      "id": "4",
      "name": "Bash Bish Falls",
      "trailUrl": "https://www.scenichudson.org/wp-content/uploads/2019/10/OA_Bash-Bish_Diana-Richards.jpg",
      "difficulty": "Easy",
      "distanceFromNyc": 106,
      "climbingTime": 1,
      "rating": 4
    }
  ]

app.get('/', (req, res) => {
  res.send("This is root!");
});

app.get('/trails', async (req, res) => {
  res.json(trails)
})

app.get('/trails/:id', async (req, res) => {
  const id = req.params.id
  const trail = trails.filter(trail => trail.id === id)[0]
  res.json(trail)
})

app.post('/trails', (req, res) => {
  const trail = req.body
  trails.push(trail)
  res.json(trails)
})

app.put('/trails/:id', async (req, res) => {
  const id = req.params.id
  const trailIndex = trails.findIndex(trail => trail._id === id)
  const trail = { ...trails[trailIndex], ...req.body }
  trails.splice(trailIndex, 1, trail)
  res.json(trail)
})

app.delete('/trails/:id', async (req, res) => {
  const id = req.params.id
  const trailIndex = trails.findIndex(trail => trail._id === id)
  trails.splice(trailIndex, 1)
  res.json(trails)
})