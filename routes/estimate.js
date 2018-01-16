var express = require('express')
var router = express.Router()

/* GET users listing. */

router.options('/', function (req, res, next) {
  res.status(200).json({data: ['get', 'post']})
})

router.get('/carbon-offset', function (req, res, next) {
  res.status(200).json({data: [{carbon_offset: '2k', unit: 'metric tons'}]})
})
/**
 *
 */
router.post('/swytch-allocation', function (req, res, next) {

  res.status(200).json({data: [{swytch_allocation: '0.000234', symbol: 'SET'}]})
})

module.exports = router
