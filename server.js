
const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')
const PORT = process.env.PORT || 8080
const db = require('./db/connection')
const Trail = require('./models/trail')
const app = express()


app.use(cors())
app.use(bodyParser.json())
// app.use(express.json());
app.use(logger('dev'))

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
})

app.get('/', (req, res) => res.send("I am GROOT!"))

app.get('/trails', async (req, res) => {
    try {
        const trails = await Trail.find()
        res.json(trails)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

app.get('/trails/:id', async (req, res) => {
    try {
        const { id } = req.params
        const trail = await Trail.findById(id)
        if (!trail) throw Error('Trail not found')
        res.json(trail)
    } catch (e) {
        console.log(e)
        res.send('Trail not found!')
    }
})

app.post('/trails', async (req, res) => {
    try {
        const trail = await new Trail(req.body)
        await trail.save()
        res.status(201).json(trail)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
})

app.put('/trails/:id', async (req, res) => {
    const { id } = req.params
    await Trail.findByIdAndUpdate(id, req.body, { new: true }, (error, trail) => {
        if (error) {
            return res.status(500).json({ error: error.message })
        }
        if (!trail) {
            return res.status(404).json({ message: 'Trail not found!' })
        }
        res.status(200).json(trail)
    })
})

app.delete('/trails/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Trail.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Trail deleted")
        }
        throw new Error("Trail not found")
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})