const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Asana = require('./../models/Asana.model');


//* POST - Create a new asana
router.post('/addAsana', (req, res, next) => {

  const { nameEnglish, nameSanskrit, level, imageUrl } = req.body;

  Asana
    .create({ nameEnglish, nameSanskrit, level, imageUrl })
    .then(item => res.status(200).json('created'))
    .catch(err => res.status(500).json(err))

})

//* GET - Find a asana
router.get('/searchAsana/:id', (req, res, next) => {

  const { id } = req.params;

  Asana
    .findById(id)
    .then(item => res.status(200).json(item))
    .catch(err => res.status(500).json(err))

})

//* GET - Find random 12 asanas
router.get('/randomSet/:level', (req, res, next) => {

  let { level } = req.params;
  level *= 1;

  Asana
    .aggregate([{ $match: { level } }, { $sample: { size: 12 } }])
    .then(results => res.status(200).json(results))
    .catch(err => res.status(500).json(err))


  // Asana
  //   .countDocuments({ level })
  //   .then(count => {

  //     const random = Math.floor(Math.random() * count);

  //     Asana
  //       .find({ level })
  //       .skip(random)
  //       .limit(12)
  //       .then(results => res.status(200).json(results))
  //       .catch(err => res.status(500).json(err))

  //   })
  //   .catch(err => res.status(500).json(err))

})

//* GET - Find random names
router.get('/randomNames/:id', (req, res, next) => {

  const { id } = req.params;

  Asana
    .aggregate([
      { $match: { _id: { $ne: new mongoose.Types.ObjectId(id) } } },
      { $sample: { size: 3 } },
      { $project: { nameSanskrit: 1, _id: 0 } }])
    .then(results => res.status(200).json(results))
    .catch(err => res.status(500).json(err))

})

module.exports = router;
