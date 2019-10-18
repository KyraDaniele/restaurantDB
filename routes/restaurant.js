const express = require('express'),
    router = express.Router(),
    retsaurantModel = require('../models/restaurantModel');

router.get('/', async function(req, res, next) {
    const executiveData = await retsaurantModel.getAll();
    console.log('executive data', executiveData);

    res.render('template', {
        locals: {
            title: 'Restaurants',
            data: executiveData
        },
        partials: {
            partial: 'partial-restaurant'
        }
    });
});

module.exports = router;
