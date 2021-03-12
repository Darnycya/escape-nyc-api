const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const PORT = process.env.PORT || 3000
const db = require('./db/connection')
const Player = require('./models/player')


const cors = require('cors')


const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
})



app.get('/', (req, res) => res.send("This is root!"))


app.get('/players', async (req, res) => {
    try {
        const players = await Player.find()
        res.json(players)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
})


app.get('/players/:id', async (req, res) => {
    try {
        const { id } = req.params
        const player = await Player.findById(id)
        res.json(player)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
})


app.post('/players', async (req, res) => {
    try {
        const player = new Player(req.body)
        await player.save()
        res.status(201).json(player)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
})



app.put('/players/:id', async (req, res) => {
    const { id } = req.params
    await Player.findByIdAndUpdate(id, req.body, { new: true }, (error, player) => {
        if (error) {
            return res.status(500).json({ error: error.message })
        }
        if (!player) {
            return res.status(404).json(player)
        }
        res.status(200).json(player)
    })
})


app.delete('/players/:id', async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Player.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Player deleted")
        }
        throw new Error("Player not deleted!")
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})