const router = require('express').Router()
let Exercise = require('../models/exercise.model')

//1 API-EP for getting list of all users
router.route('/').get((request, response) => {
    Exercise.find()
        .then(exercise => response.json(exercise))
        .catch(error => response.status(400).json(`Server get-exercises error: ${error} `))
})
//2 API-EP for adding a new user
router.route('/add').get((request, response) => {
    const uername = request.body.username
    const description = request.body.description
    const duration = request.body.description
    const date = Date.parse(request.body.date)

    const newExercise = new Excercise( {
        username, description, duration, date
    })

    newExercise.save()
    .then(() => response.json("exercise added successfully"))
        .catch(error => response.status(400).json(`Server add-exercise error: ${error} `))

})
module.exports = router