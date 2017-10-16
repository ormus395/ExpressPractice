const express = require('express');
const router = express.Router();

const Pants = require('../models/Pants');

router.get('/', (req, res) => {
  Pants.find({})
    .then(pants => {
      res.json(pants)
    })
})

router.post('/', (req, res) => {
  let pants = {
    maker: req.body.maker,
    size: req.body.size
  }
  new Pants(pants).save()
    .then(pants => {
      res.json({success: true, obj: pants})
    })
    .catch(err => {
      res.send(err)
    })
})

router.put('/', (req, res) => {
  Pants.findOne({_id: req.query.id})
    .then(pants => {
      pants.maker = req.body.maker || pants.maker;
      pants.size = req.body.size || pants.size;
      pants.save()
        .then(pants => {
          console.log(pants)
          res.json({succes: true, obj: pants})
        })
    })
      .catch(err => res.json({success: false, message: 'FAIL'}))
})

router.delete('/:id', (req, res) => {
  Pants.remove({_id: req.params.id})
    .then(() => {
      res.json({success: true, message: 'Pants thrown away'})
    })
    .catch(err => {
      res.json({success: false, message: 'Still need mah pants'})
    })
})

module.exports = router;