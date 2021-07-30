const  router  = require("express").Router();
const { filterByQuery, findById, createNewAnimal, validateAnimal } = require('../../lib/animals');
const { animals } = require('../../data/animals.json');
const express = require('express');


router.use(express.static('public'));

router.get('/animals', (req, res) => {
    let results = animals;
    console.log(req.query);
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

router.get('/animals/:id', (req, res) => {
    const result = findById(req.params.id, animals);
        res.json(result);
});

router.post('/animals', (req, res) => {
    // req.body is where our incoming content will be
    // set id based on what the nest index of the array will be
    req.body.id = animals.length.toString();

      // if any data in req.body is incorrect, send 400 error back
    if (!validateAnimal(req.body)) {
    res.status(400).send('The animal is not properly formatted.');
    } else {
     // add animal to json file and animals array in this function
    const animal = createNewAnimal(req.body, animals);

    console.log(req.body);
    res.json(animal);
    }
});

module.exports = router;