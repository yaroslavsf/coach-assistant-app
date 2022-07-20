const router = require('express').Router()
let User = require('../models/user.model')

//1 API-EP for getting list of all users
router.route('/').get((request, response) => {
    User.find()
        .then(users => response.json(users))
        .catch(error => response.status(400).json(`Server get-users error: ${error} `))
})
//2 API-EP for adding a new user
router.route('/').get((request, response) => {
    const userName = request.body.username;
    const newUser = new User({userName})
    newUser.save()
        .then(() => response.json("user added successfully"))
        .catch(error => response.status(400).json(`Server add-user error: ${error} `))
})
module.exports = router