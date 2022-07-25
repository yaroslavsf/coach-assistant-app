const router = require('express').Router()
let Exercise = require('../models/exercise.model')

//1 API-EP for getting list of all users
router.route('/').get((request, response) => {
    Exercise.find()
        .then(exercise => response.json(exercise))
        .catch(error => response.status(400).json(`Server get-exercises error: ${error} `))
})

//2 API-EP for adding a new user
router.route('/add').post((request, response) => {
    const username = request.body.username
    const description = request.body.description
    const duration = request.body.duration
    const date = Date.parse(request.body.date)

    const newExercise = new Exercise( {
       username,description,duration,date
    })

    newExercise.save()
    .then(() => response.json("exercise added successfully"))
        .catch(error => response.status(400).json(`Server add-exercise error: ${error} `))

})

//3 API-EP for getting one exercise by id
router.route('/id:').get((request, response) => {
    Exercise.findById(request.params.id)
    .then(exercise => response.json(exercise))
    .catch(error => response.status(400).json(`exercise can't be found${error}`))
})

//4 API-EP for deleting one exercise by id
router.route('/id:').delete((request, response) => {
    Exercise.findByIdAndDelete(request.params.id)
    .then(() => response.json('exercise was deleted successfully!'))
    .catch(error => response.status(400).json(`exercise can't be deleted${error}`))
})

//5 API-EP for editing one exercise by id
router.route('/update/:id').post((request, response) => {
    Exercise.findById(request.params.id)
    .then(exercise => {
        exercise.username = request.body.username;
        exercise.description = request.body.description;
        exercise.duration = Number(request.body.duration);
        exercise.date = Date.parse(request.body.date) 

        exercise.save()
        .then(() => response.json('exercise was edited successfully!'))
        .catch(error => response.status(400).json(`exercise can't be edited${error}`))
    })
    .catch(error => response.status(400).json(`exercise can't be found while editing${error}`))
})

module.exports = router