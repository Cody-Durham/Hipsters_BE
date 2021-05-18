// Create a new EXPRESS route
const router = require('express').Router()


const { json } = require('express')
//import our model
const Hipster = require('../models/Hipster_model')

// here is the seed data for the seed route
const placeHipster = [
    {
        name: 'Hipster 1', 
        img: 'https://i.guim.co.uk/img/media/e7e6180014a14d9653e4756448828a83a7624d28/0_104_3712_2227/master/3712.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=a755b610339690c6db0c52aac5862c99', 
        description: 'Tatted with weid glasses',
    },
    {
        name: 'Hipster 2', 
        img: 'https://brainworldmagazine.com/wp-content/uploads/2016/06/Hipster-1.jpg', 
        description: 'Overly grown beard with curly mustache',
    },
    {
        name: 'Hipster 3', 
        img: 'https://www.telegraph.co.uk/multimedia/archive/03046/hipster-tash_3046941b.jpg', 
        description: 'Guy with big black glasses and twisted mustache',
    },
    {
        name: 'Hipster 4', 
        img: 'https://pbs.twimg.com/profile_images/414879385041510400/NtUJsvZ9.jpeg', 
        description: 'Another huge beard with weird glasses and jewlery',
    },
]
// INDEX route / seed data
router.get('/seed', async (req, res) => {
    try {
        await Hipster.remove({})
        await Hipster.create(placeHipster)
        const hipsters = await Hipster.find({})
        res.json(hipsters)
        
    } catch (error) {
        res.status(400).json(error)
    }
})

// INDEX route / find all 
router.get('/', async (req, res) => {
    try {
        const findAllHipsters = await Hipster.find({})
        res.json(findAllHipsters)
    } catch (error) {
        res.status(400).json(error)
    }
});

//CREATE route (POST) / create a single hipster using the body
router.post('/', async (req, res) => {
    try {
        const makeNewHipster = await Hipster.create(req.body)
        res.json(makeNewHipster)
    } catch (error) {
        res.status(400).json(error)
    }
})


// UPDATE route (PUT) / update a single route by ID using the form
router.put('/:id', async (req, res) => {
    try {
        const updateHipster = await Hipster.findByIdAndUpdate(
            req.params.id, // <-- this finds it by the ID
            req.body, // <-- this replaces what it found with the body of the JSON objec
            { new: true }
        )
        res.json(updateHipster)
    } catch(error) {
        res.status(400).json(error)
    }
});

// DESTROY / delete a route
router.delete('/:id', async (req, res) => {
    try {
        const deleteHipster = await Hipster.findByIdAndDelete(req.params.id)
        res.json(deleteHipster)
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router